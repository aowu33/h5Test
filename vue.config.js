module.exports = {
    configureWebpack: {        
        devServer: {
          headers: {
            'Access-Control-Allow-Origin': '*'            
          }
        }
    },
    // devServer: {
    //   proxy: {
    //     "/api": {
    //       target: "http://192.168.16.65:9104", 
    //       // ws: true, //如果要代理 websockets，配置这个参数
    //       // secure: false, // 如果是https接口，需要配置这个参数
    //       changeOrigin: true, //是否跨域
    //       pathRewrite: {
    //         "^/api": "/gateway-industry/manager-center",
    //       },
    //     },
    //   },
    // },
}