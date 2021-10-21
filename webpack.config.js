const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader']
      },
    ]
  },
  devServer: {
    publicPath: '/',
    hot: true,
    port: 8080,
    proxy: {
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './client/index.html' })
  ]
};
