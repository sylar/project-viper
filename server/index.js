const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')
const proxy =  require('proxy-middleware')
const express = require('express')
const path = require('path')
const url = require('url')
const app = express()
const PORT = process.env.PORT || 3000
const { fooRouter } = require('./routers')
const config = require('../config/webpack.config.js')

app.use('/foo', fooRouter)

if (process.env.NODE_ENV !== 'development') {
  const compression = require('compression')
  const publicDir = path.resolve( __dirname, '..', 'public')

  app.use(compression())
  app.use(express.static(publicDir))

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
} else {
  const wdsConfig = {
    noInfo: true,
    publicPath: '/'
  }

  const compiler = webpack(config)
  compiler.apply(new DashboardPlugin())

  app.use(webpackDevMiddleware(compiler, wdsConfig))
  app.use(webpackHotMiddleware(compiler))
}

app.listen(PORT, () => console.log(`Magic happenening on port ${PORT}.`))
