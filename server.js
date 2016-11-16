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

if (process.env.NODE_ENV !== 'development') {
  const config = require('./webpack.config.prod.js')
  const compression = require('compression')
  const publicDir = path.resolve( __dirname, 'static')

  app.use(compression())
  app.use(express.static(publicDir))
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
} else {
  const config = require('./webpack.config.dev.js')
  const PORT = 3000
  const wdsConfig = {
    noInfo: true,
    publicPath: config.output.publicPath
  }

  const compiler = webpack(config)
  compiler.apply(new DashboardPlugin())

  app.use(webpackDevMiddleware(compiler, wdsConfig))
  app.use(webpackHotMiddleware(compiler))
}

app.get('/api', (req, res) => res.send('Hello from the other side!'))
app.listen(PORT, () => console.log('Magic happenening on port 3000.'))
