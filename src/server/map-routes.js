const { Router } = require('express')

const googleMapsClient = require('@google/maps').createClient({
  Promise: Promise,
  key: process.env.GOOGLE_MAPS_API
})

const router = new Router()

router.get('/places', (req, res) => {
  let query = req.query.place
  googleMapsClient.places({ query })
    .asPromise()
    .then(response => {
      res.json(response)
    })
})

module.exports = router
