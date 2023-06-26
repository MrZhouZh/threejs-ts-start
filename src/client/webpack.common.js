const path = require('node:path')

module.exports = {
  entry: './src/client/client.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/client'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
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
}
