const ExtractTextPlugin = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
const prod = process.argv.indexOf('-p') !== -1;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/main.js",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
    port: 8283,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }, {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  output: {
    path: __dirname + "/public/",
    filename: "./js/main.min.js"
  },
  plugins: [
    new ExtractTextPlugin({ 
      filename: '[name].css',
      allChunks: true,
    }),
  ],
};
