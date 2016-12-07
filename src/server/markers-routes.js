/*eslint-disable no-console*/

const Router = require('express').Router
const ObjectId = require('mongodb').ObjectId
const returnDocument = require('./util').returnDocument
const Marker = require('../models/Markers')

const router = new Router()

router.get('/', (req, res) => {
    Marker
      .find()
      .toArray((err, docs) => {
        if (err) return res.sendStatus(500)
        res.json(docs)
      })
})

router.get('/:markerId', (req, res) => {
  let _id = ObjectId(req.params.markerId)
  returnDocument(Marker, _id, res)
})

router.post('/', (req, res) => {
  let marker = new Marker(req.body)
  marker.save((err, data) => {
    if (err) return res.send('Marker could not be saved')
    res.send(data)
  })
})

router.put('/:markerId', (req, res) => {
  let _id = ObjectId(req.params.markerId)
  Marker
    .update({ _id }, { $set: req.body })
    .then(() => {
      returnDocument(Marker, _id, res)
    })
})

router.delete('/:markerId', (req, res) => {
  let _id = ObjectId(req.params.markerId)
  Marker
    .removeOne({ _id })
    .then(() => {
      res.send('Deleted plan: ' + _id)
    })
})

module.exports = router
