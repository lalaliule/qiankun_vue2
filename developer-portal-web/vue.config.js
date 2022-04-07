/* eslint-disable indent */
const { name } = require('./package')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    PROJ_TYPE: 'screen', // 项目类型
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    port: 8092, //子应用启动端口号，不可随意修改，与上文中父应用注册的子应用		端口号对应
    headers: {
      'Access-Control-Allow-Origin': '*', //循序跨域
    },
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/a76ff711b33a233cdeac2112d8d909d0/llgtfoo/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
