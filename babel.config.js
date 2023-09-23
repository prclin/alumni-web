module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // useBuiltIns: false 默认值，无视浏览器兼容配置，引入所有 polyfill
        // useBuiltIns: entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill
        // useBuiltIns: usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加
        useBuiltIns: 'usage',
        // 开启tree shaking
        modules: false,
        corejs: '3.32.2', //  core-js 版本号
        targets: {
          chrome: '58',
          ie: '10'
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    process.env.NODE_ENV === 'development' && require('react-refresh/babel')
  ].filter(Boolean)
}
