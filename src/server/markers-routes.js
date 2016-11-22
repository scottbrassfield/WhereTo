/*eslint-disable no-console*/

const { Router } = require('express')
const { ObjectId } = require('mongodb')
const { returnDocument } = require('./util')

const router = new Router()

module.exports = function(db) {

  const markers = db.collection('markers')

    router.get('/', (req, res) => {
      markers
        .find()
        .toArray((err, docs) => {
          if (err) return res.sendStatus(500)
          res.json(docs)
        })
    })

    router.get('/:markerId', (req, res) => {
      let _id = ObjectId(req.params.markerId)
      returnDocument(markers, _id, res)
    })

    router.post('/', (req, res) => {
      markers
        .insertOne(req.body)
        .then((data, err) => {
          if (err) return res.sendStatus(500)
          res.json(data.ops[0])
        })
    })

    router.put('/:markerId', (req, res) => {
      let _id = ObjectId(req.params.markerId)
      markers
        .update({ _id }, { $set: req.body })
        .then(() => {
          returnDocument(markers, _id, res)
        })
    })

    router.delete('/:markerId', (req, res) => {
      let _id = ObjectId(req.params.markerId)
      markers
        .removeOne({ _id })
        .then(() => {
          res.send('Deleted plan: ' + _id)
        })
    })

    return router

}
