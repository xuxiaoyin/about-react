const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      createProxyMiddleware(
  '/api',
  {
            target: 'http://localhost:8090', // 转发给谁
            changeOrigin: true, // 控制服务器接收到的请求头中host字段的值, 配置多个代理
            pathRewrite: {'^/api': ''} // 重写路径
          }
      ),
      createProxyMiddleware(
          '/api2',
          {
            target: 'http://localhost:8091', // 转发给谁
            changeOrigin: true, // 控制服务器接收到的请求头中host字段的值, 配置多个代理
            pathRewrite: {'^/api2': ''} // 重写路径
          }
      ),
  )
};
