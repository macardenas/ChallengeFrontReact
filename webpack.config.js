const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    allowedHosts: 'all',
    port: 4000
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html'
    })
  ]
}