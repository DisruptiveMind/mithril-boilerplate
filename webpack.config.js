const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const isProd = process.env.NODE_ENV === 'prod';

// NB: used for setting template variables during build
var templateData = {
  title: "Disruptive Art Studio"
};

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  watch: !isProd,
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          // loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader', 'postcss-loader']
          })
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      metadata: templateData,
      template: './public/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      ui: false,
      notify: false,
      ghostMode: false,
      server: { baseDir: ['dist'] }
    })
  ]
};