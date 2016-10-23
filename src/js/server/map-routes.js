const { Router } = require('express')

const googleMapsClient = require('@google/maps').createClient({
  Promise: Promise,
  key: 'AIzaSyAXi_K8crUx_aUUTHsssh4fYK60-CTGn1g'
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
