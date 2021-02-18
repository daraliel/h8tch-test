var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
        '$' : 'jquery',
        'jQuery': "jquery"
      })
  ],
  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
