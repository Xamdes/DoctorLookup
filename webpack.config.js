const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const net = require('net');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(function (req, res, next)
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next)
{
  // Handle the get for this route
});

app.post('/', function (req, res, next)
{
  // Handle the post for this route
});

module.exports =
{
  entry: './src/main.js',
  output:
  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          cache: false,
          compress: {
            arrows: true,
            booleans: true,
            collapse_vars: false,
            comparisons: true,
            computed_props: true,
            conditionals: true,
            dead_code: true,
            drop_console: false,
            ecma: 6,
            evaluate: true,
            hoist_funs: false,
            hoist_props: false,
            //hoist_var tends to increase file size if enabled
            hoist_vars: false,
            if_return: true,
            inline: 1,
            join_vars: true,
            keep_infinity: true,
            loops: true,
            negate_iife: false,
            passes: 3,
            properties: false,
            reduce_funcs: true,
            reduce_vars: true,
            sequences: 5,
            side_effects: false,
            switches: true,
            toplevel: false,
            top_retain: true,
            typeofs: false,
            unsafe: false,
            unused: false,
            warnings: false,
          },
          mangle: true,
        }
      })
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'DoctorLookup',
      template: './src/index.html',
      inject: 'body'
    }),
    new Dotenv()
  ],
  performance:
  {
    hints: false
  },
  mode: 'development',
  module:
  {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
};
