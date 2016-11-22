/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const plansRoutes = require('./plans-routes')
const markersRoutes = require('./markers-routes')

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/where-to'
const PORT = process.env.PORT || 3030

MongoClient.connect(DB_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  express()
    .use(express.static(path.normalize(__dirname + '/../../dist/public')))
    .use(bodyParser.json())
    .use('/api/map', require('./map-routes'))
    .use('/api/plans', plansRoutes(db))
    .use('/api/markers', markersRoutes(db))
    .listen(PORT, () => {
      console.log('Listening on port ' + PORT)
    })

})
