const { defineConfig } = require('@vue/cli-service')
const path = require('path') 


module.exports = 
  defineConfig({
    transpileDependencies: true,
    publicPath: '/fullstack-table-vue/',
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000'
        }
      }
    }
  })

