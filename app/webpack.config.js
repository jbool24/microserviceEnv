var path = require('path');
var webpack = require('webpack');

module.export({
  entry: './app/main.jsx',
  output: {
    path: __dirname, 
    filename: './public/bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx'],
    modulesDirectories: ['node_modules', './public/bower_components', './public/web_modules']
    },
  });
