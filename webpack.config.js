const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'src');

const MAPS_KEY          = process.env.MAPS_KEY;


module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: '/js/[name].js',
  },
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Moodie Foodie',
      xhtml: true,
      inject: false,
      scripts: [`https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyDLO9BWFDxOz2rzAjvkDwel7aRz025PcgY`],
      template: require('html-webpack-template'),
      appMountId: 'root-container',
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(png|gif|jpg)$/, loader: 'file-loader?name=/images/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=/[name].[ext]' },
      { test: /\.jsx?$/, loader: 'babel' },
      {
        test:   /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/font-woff&name=/fonts/[name].[ext]',
      },
      {
        test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
      },
      {
        test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]',
      },
      {
        test:   /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100&mimetype=image/svg+xml&name=/fonts/[name].[ext]',
      },
    ],
  },
};
