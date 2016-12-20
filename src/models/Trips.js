const mongoose = require('mongoose')

const tripSchema = mongoose.schema({
  destination: 'String',
  dates: {
    date: Date,
    planIds: Array,
    markerIds: Array,
  },
  userId: String
}, { collection: 'trips' })

module.exports = mongoose.model('Trip', tripSchema)
