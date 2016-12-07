/*eslint-disable no-console*/
const Router = require('express').Router
const ObjectId = require('mongodb').ObjectId
const returnDocument = require('./util').returnDocument
const Plan = require('../models/Plans')

const router = new Router()

router.get('/', (req, res) => {
  Plan
    .find()
    .toArray((err, docs) => {
      if (err) return res.sendStatus(500)
      res.json(docs)
    })
})

router.get('/:planId', (req, res) => {
  let _id = ObjectId(req.params.planId)
  returnDocument(Plan, _id, res)
})

router.post('/', (req, res) => {
  Plan
    .insertOne(req.body)
    .then((data, err) => {
      if (err) return res.sendStatus(500)
      res.json(data.ops[0])
    })
})

router.put('/:planId', (req, res) => {
  let _id = ObjectId(req.params.planId)
  Plan
    .update({ _id }, { $set: req.body })
    .then(() => {
      returnDocument(Plan, _id, res)
    })
})

router.delete('/:planId', (req, res) => {
  let _id = ObjectId(req.params.planId)
  Plan
    .removeOne({ _id })
    .then(() => {
      res.send('Deleted plan: ' + _id)
    })
})

module.exports = router
