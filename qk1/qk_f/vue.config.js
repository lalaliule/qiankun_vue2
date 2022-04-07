module.exports = {
    devServer: {
      port: 8090, //主应用启动端口号，视情况而定
      headers: {
        "Access-Control-Allow-Origin": "*", // 允许跨域访问子应用页面
      },
    },
   } ;