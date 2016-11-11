const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const htmlMinifier = require('html-minifier').minify
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
      // {
      //     test: /\.sss$/,
      //     loader: ExtractTextPlugin.extract({
      //       fallbackLoader: 'style-loader',
      //       loader: ['css', 'postcss']
      //     })
      //   },
      {
        test: /\.css$/,
        // loader: ExtractTextPlugin.extract({ loader: 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]!postcss', fallbackLoader: 'style-loader' })

        // ExtractTextPlugin.extract({
        //   fallbackLoader: "style-loader",
        //   loader: "css-loader"


          // {
          //   loader: 'css',
          //   options: { importLoaders: 1, modules: true }
          // },

        // })
        use: [
          'style',
          {
            loader: 'css',
            options: { importLoaders: 1, modules: true }
          },
          'postcss'
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
    new CopyWebpackPlugin([{ from: require.resolve('tachyons/css/tachyons.css') }]),
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      comments: false
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js',
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
      sourceMap: false

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
           minifyURLs: true,
           useShortDoctype: true
         }
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
    // new ExtractTextPlugin({
    //     filename: 'styles.css',
    //     allChunks: true
    //   })
  ]
}
