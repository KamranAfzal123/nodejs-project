const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use('/', createProxyMiddleware({
  target: 'https://wsdemo.laximo.ru',
  changeOrigin: true,
  onProxyRes: (proxyRes, req, res) => {
    proxyRes.headers['X-Frame-Options'] = '';
    proxyRes.headers['Content-Security-Policy'] = '';
  },
}));

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
