const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const htmlMinifier = require('html-minifier').minify
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve('./client'),
  entry: {
    main: './index.js',
    vendor: ['react', 'classnames', 'redux', 'redux-saga', 'react-router-dom']
  },
  output: {
    path: path.resolve('./public'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader?minimize&modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader'
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ["transform-runtime", 'transform-react-jsx-img-import']
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][hash:base64:5].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [
      '.',
      path.join(__dirname, '..', '..', './client', 'assets'),
      path.resolve('./client'),
      'node_modules'
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyWebpackPlugin([{ from: require.resolve('tachyons/css/tachyons.min.css'), to: 'css/tachyons.css'}]),
    new ExtractTextPlugin({
      filename: "css/style.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Prod App',
      template: './assets/template.html',
      minify:
      {
        useShortDoctype: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'js/vendor.bundle.js',
    }),
    new LodashModuleReplacementPlugin({
      shorthands: true,
      collections: true,
      flattening: true,
      paths: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      },
      mangle: true,
      beautify: false,
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: JSON.stringify(process.env.PORT),
      }
    }),
  ]
}
