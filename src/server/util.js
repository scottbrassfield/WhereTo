const returnDocument = (collection, docId, result) => {
  collection
    .findOne({ _id: docId })
    .then(doc => {
      result.json(doc)
    })
    .catch(err => {
      if (err) result.sendStatus(500)
    })
}

module.exports = {
  returnDocument
}
