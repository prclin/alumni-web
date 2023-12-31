import * as path from 'path'
import { merge } from 'webpack-merge'
import config from './webpack.config'
import * as webpack from 'webpack'
import 'webpack-dev-server'
import * as process from 'process'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export default merge(config, {
  mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
  devtool: 'eval-cheap-module-source-map', // 源码调试模式,后面会讲
  devServer: {
    port: 3000, // 服务端口号
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true, // 开启热更新，后面会讲react模块热替换具体配置
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, './public') // 托管静态资源public文件夹
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ReactRefreshWebpackPlugin() // 添加热更新插件
  ]
})
