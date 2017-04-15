const webpack = require('webpack')
const express = require('express')
const path = require('path')
const url = require('url')
const app = express()
const PORT = process.env.PORT || 3000
const { fooRouter, apiRouter } = require('./routers')
const config = require('../config/webpack.config.js')
const history =  require('connect-history-api-fallback')

app.use('/foo', fooRouter)
app.use('/api', apiRouter)
app.use(history())

if (process.env.NODE_ENV !== 'development') {
  const compression = require('compression')
  const publicDir = path.resolve( __dirname, '..', 'public')

  app.use(compression())
  app.use(express.static(publicDir))

} else {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const DashboardPlugin = require('webpack-dashboard/plugin')
  const wdsConfig = {
    noInfo: true
  }

  const compiler = webpack(config)
  compiler.apply(new DashboardPlugin())

  app.use(webpackDevMiddleware(compiler, wdsConfig))
  app.use(webpackHotMiddleware(compiler))
}

app.listen(PORT, () => console.log(`Magic happenening on port ${PORT}.`))
