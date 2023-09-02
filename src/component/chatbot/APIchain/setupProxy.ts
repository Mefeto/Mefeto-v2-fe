// For solving CORS problems.

import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (App) {
    App.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.law.go.kr',
            changeOrigin: true,
        })
    );
};