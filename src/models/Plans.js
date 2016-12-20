const mongoose = require('mongoose')

const plansSchema = new mongoose.Schema({
  plan: String,
  startTime: Date,
  endTime: Date,
}, {collection: 'plans'})

module.exports = mongoose.model('Plan', plansSchema)
