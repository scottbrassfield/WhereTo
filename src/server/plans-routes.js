/*eslint-disable no-console*/
const { Router } = require('express')
const { ObjectId } = require('mongodb')
const { returnDocument } = require('./util')

const router = new Router()

module.exports = function(db) {

  const plans = db.collection('plans')

    router.get('/', (req, res) => {
      plans
        .find()
        .toArray((err, docs) => {
          if (err) return res.sendStatus(500)
          res.json(docs)
        })
    })

    router.get('/:planId', (req, res) => {
      let _id = ObjectId(req.params.planId)
      returnDocument(plans, _id, res)
    })

    router.post('/', (req, res) => {
      plans
        .insertOne(req.body)
        .then((data, err) => {
          if (err) return res.sendStatus(500)
          res.json(data.ops[0])
        })
    })

    router.put('/:planId', (req, res) => {
      let _id = ObjectId(req.params.planId)
      plans
        .update({ _id }, { $set: req.body })
        .then(() => {
          returnDocument(plans, _id, res)
        })
    })

    router.delete('/:planId', (req, res) => {
      let _id = ObjectId(req.params.planId)
      plans
        .removeOne({ _id })
        .then(() => {
          res.send('Deleted plan: ' + _id)
        })
    })

    return router

}
