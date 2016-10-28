/* eslint-disable no-console */

const express = require('express')
const bodyParser = require('body-parser')
const mapRoutes = require('./map-routes')

const PORT = process.env.PORT || 3000

express()
  .use(bodyParser.json())
  .use('/map', mapRoutes)
  .listen(PORT, () => {
    console.log('Listening on port 3000...')
  })
