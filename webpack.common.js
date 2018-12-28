// Webpack common configuration

/**
 * The path module provides utilities for working with file and directory paths
 */
const path = require('path');

/**
 * A webpack plugin to remove/clean your build folder(s) before building
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // This is where you want webpack to start bundling. Change/add entry points to suit your app.
  entry: {
    app: './src/js/app.js'
  },
  output: {
    filename: './[name].bundle.js',
    chunkFilename: './[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'responsive-loader',
        options: {
          // Change these options to suit your desired image output names and sizes
          adapter: require('responsive-loader/sharp'),
          sizes: [400, 600, 800],
          name: 'images/[name]-[width]-[hash].[ext]',
          placeholder: true,
          placeholderSize: 50
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          },
          'eslint-loader'
        ]
      }
    ]
  }
};