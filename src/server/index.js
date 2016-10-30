/* eslint-disable no-console */

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mapRoutes = require('./map-routes')

const PORT = process.env.PORT || 3030

express()
  .use(express.static(path.normalize(__dirname + '/../../dist/public')))
  .use(bodyParser.json())
  .use('/map', mapRoutes)
  .listen(PORT, () => {
    console.log('Listening on port ' + PORT)
  })
