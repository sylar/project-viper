const express = require('express')
const router = express.Router()
const { getMovie } = require('./handlers')

router.get('/movie', (req, res) => getMovie(req)
  .then(movie => res.send(movie))
  .catch(err => res.status(500).send(err))
)

module.exports = router
