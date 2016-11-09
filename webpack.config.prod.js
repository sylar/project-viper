const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    js: './index.js',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ['lodash']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: 'production' }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      mangle: true,
      sourceMap: false,
      beautify: false,
      debug: false
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'assets/template.html'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: false,
      options: {
        postcss: [
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
