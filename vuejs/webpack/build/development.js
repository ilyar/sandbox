// file: build/development.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('path')
const rootDir = fs.dirname(__dirname)
module.exports = {
  mode: 'development',
  entry: {
    index: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: fs.join(rootDir, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Vue app with webpack 4',
      template: fs.join(rootDir, 'src', 'app.html')
    })
  ]
}
