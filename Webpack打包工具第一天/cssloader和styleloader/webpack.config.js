const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/login/login.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'login/login.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public/login.html'),
    filename: path.join(__dirname, 'dist/login/login.html')
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}