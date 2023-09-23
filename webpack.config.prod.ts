import { merge } from 'webpack-merge'
import config from './webpack.config'
import * as path from 'path'
import * as webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import PurgeCSSPlugin from 'purgecss-webpack-plugin'
import GlobAll from 'glob-all'
import CompressionPlugin from 'compression-webpack-plugin'
import * as process from 'process'

export default merge(config, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 压缩css
      new TerserPlugin({ // 压缩js
        parallel: true,
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'] // 删除console.log
          }
        }
      }),
      '...'
    ],
    // 分包
    splitChunks: {
      cacheGroups: { // 配置提取模块的方案
        default: false,
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 2,
          enforce: true,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'initial',
          priority: 1,
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'), // 复制public下文件
          to: path.resolve(__dirname, './dist'), // 复制到dist目录中
          filter: filepath => {
            return true
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8][ext]' // 抽离css的输出目录和名称
    }),
    // 清理无用css
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: GlobAll.sync([
        `${path.join(__dirname, './src')}/**/*.tsx`,
        path.join(__dirname, './index.html')
      ]),
      safelist: {
        standard: [/^ant-/] // 过滤以ant-开头的类名，哪怕没用到也不删除
      }
    }),
    // gzip
    new CompressionPlugin({
      test: /.(js|css)$/, // 只生成css,js压缩文件
      filename: '[path][base].gz', // 文件命名
      algorithm: 'gzip', // 压缩格式,默认是gzip
      threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
      minRatio: 0.8 // 压缩率,默认值是 0.8
    })
  ]
})
