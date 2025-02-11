const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://213.173.108.156:17860',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/', // keeps /api in the path
      },
    })
  );
};