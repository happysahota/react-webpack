var debug = process.env.NODE_ENV !== "production";
const prod = process.argv.indexOf('-p') !== -1;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/public/",
    filename: "./js/main.min.js",
    publicPath: "/"
  },
  devServer:{
    historyApiFallback: true
  },
  plugins: !prod ? [] : [],
};
