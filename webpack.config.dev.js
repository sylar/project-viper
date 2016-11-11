const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const postcssSmartImport = require('postcss-smart-import')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, './src'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMaps: 'inline',
              localIdentName: '[name]-[local]'
            }
          },
          'postcss'
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
    new CopyWebpackPlugin([{ from: require.resolve('tachyons/css/tachyons.css') }]),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new HtmlWebpackPlugin({
      title: 'Dev App',
      template: 'assets/template.html',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        debug: true,
        postcss: [
          postcssSmartImport(),
          precss(),
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10'
            ]
          })
        ]
      }
    })
  ]
}
