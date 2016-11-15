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
  context: path.join(__dirname, './src'),
  entry: {
    main: './index.js',
    vendor: ['react', 'classnames']
  },
  output: {
    path: path.join(__dirname, './static'),
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
          fallbackLoader: 'style-loader',
          loader: 'css-loader?minimize&discardUnused&modules&importLoaders=1&localIdentName=[hash:base64:3]!postcss-loader',
          publicPath: '/'}),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { 'modules': false }], 'stage-0', 'react'],
          plugins: ['lodash', 'transform-react-jsx-img-import']
        }
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
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
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
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
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
  ]
}
