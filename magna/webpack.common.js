const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    dashboard: './static_src/dashboard-main.js',
    dashboard: './static_src/dashboard-css.js',
  },
  output: {
      path: path.resolve(__dirname, 'static_build'),
      // path:  'static_build',
      filename: "[name]-[hash].js"
  },
  optimization:{
    splitChunks:{
      chunks: 'all',
    },
  },
  module:{
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({filename: './webpack-stats.json'})
  ],

};
