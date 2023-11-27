const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint校验
  css: {
    loaderOptions: {
      less: {
        additionalData: '@import "@/css/style.less";'
      }
    }
  },
  devServer: {
    proxy: {
      '/live': {
        target: 'http://live-api-m.mtime.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/live': ''
        }
      },
      '/video': {
        target: 'http://front-gateway.mtime.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/video': ''
        }
      },
        '/download': {
          target: 'https://vfx.mtime.cn/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/download': '' 
       }
        },

    }
  }
})
