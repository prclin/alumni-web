import * as path from 'path'
import type * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as process from 'process'

const config: webpack.Configuration = {
  entry: {
    index: './src/pages/index/index.tsx'
  },
  output: {
    filename: 'js/[name].[fullhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, './dist'), // 打包结果输出路径
    clean: true,
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  cache: {
    type: 'filesystem' // 使用文件缓存
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    },
    extensions: ['.js', '.tsx', '.ts'],
    modules: [path.resolve(__dirname, './node_modules'), path.resolve(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: ['babel-loader'],
        include: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.(le|c)ss$/,
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        include: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[contenthash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 // 超过50kb不转 base64
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'alumni',
      filename: 'index.html',
      inject: 'body',
      chunks: ['index']
    } as HtmlWebpackPlugin.Options)
  ]
}

export default config
