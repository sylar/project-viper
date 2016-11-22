const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('Hello from the Foo router.'))
router.get('/:bar', (req, res) => res.send(`Hello from the Foo router with ${req.params.bar} param.`))

module.exports = router
