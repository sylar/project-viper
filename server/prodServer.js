const compression = require('compression')
const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.resolve( __dirname, '..', 'static')

app.use(compression())
app.use(express.static(publicDir))
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(3000, () => console.log('Magic happening on port 3000'))
