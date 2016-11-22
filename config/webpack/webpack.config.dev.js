const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'source-map',
  context: path.resolve('./client'),
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?http://localhost:3000&reload=true',
      './index.js'
    ]
  },
  output: {
    path: path.resolve('./public'),
    filename: 'js/[name].js',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMaps: 'inline',
              localIdentName: '[local]__[hash:base64:3]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ['transform-runtime','react-hot-loader/babel', 'lodash', 'transform-react-jsx-img-import']
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '..', '..', './client'),
      'node_modules'
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: require.resolve('tachyons/css/tachyons.min.css'), to: 'css/tachyons.css'}]),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new HtmlWebpackPlugin({
      title: 'Dev App',
      template: 'assets/template.html',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
