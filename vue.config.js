let proxyObj = {}

proxyObj['/']={
    //websocket
    ws:false,
    //目标地址
    target:'http://120.79.7.36:8890',
    //发送请求头host会被设置target
    changeOrigin: true,
    //不重写请求地址
    pathRewrite:{
        '^/':'/'
    }
}

module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy: proxyObj
    }
}