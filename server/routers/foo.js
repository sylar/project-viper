const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (req, res) => res.send('Hello from the Foo router.'))
router.get('/character/:number?', (req, res) => fetch(`http://swapi.co/api/people/${req.params.number || 1}/`)
  .then(data => data.json())
  .then(data => res.send(data))
)
router.get('/:bar', (req, res) => res.send(`Hello from the Foo router with ${req.params.bar} param.`))

module.exports = router
