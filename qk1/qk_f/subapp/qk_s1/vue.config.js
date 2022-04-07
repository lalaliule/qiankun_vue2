const { name } = require("./package");
module.exports = {
  devServer: {
    port: 8091, //子应用启动端口号，不可随意修改，与上文中父应用注册的子应用		端口号对应
    headers: {
      "Access-Control-Allow-Origin": "*", //循序跨域
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};