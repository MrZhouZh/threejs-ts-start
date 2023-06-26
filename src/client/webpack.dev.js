const path = require('node:path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../../dist/client'),
    },
    hot: true,
  }
})
