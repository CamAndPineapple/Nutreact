const Webpack = require('webpack');
const path = require('path');
const appPath = path.resolve(__dirname, 'app');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');

const config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.resolve(appPath, 'main.jsx')
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel',
      exclude: [nodeModulesPath],
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
