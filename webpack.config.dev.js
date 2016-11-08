const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, './src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ['react-hot-loader/babel', 'lodash']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new HtmlWebpackPlugin({
      title: 'Test App',
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin()
  ]
}
