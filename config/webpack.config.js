let toExport = require('./webpack/webpack.config.dev.js')
if (process.env.NODE_ENV === 'production')
  toExport = require('./webpack/webpack.config.prod.js')

module.exports = toExport
