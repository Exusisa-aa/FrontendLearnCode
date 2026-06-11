const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const config = {
  devServer: {
    static: './dist',
  },
  entry: path.join(__dirname, 'src/login/login.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'login/login.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/login.html'),
      filename: path.join(__dirname, 'dist/login/login.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'login/login.css'
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
}

if (process.env.NODE_ENV === "development") {
  config.devtool = 'inline-source-map'
}

module.exports = config