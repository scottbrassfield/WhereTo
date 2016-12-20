const mongoose = require('mongoose')

const markersSchema = new mongoose.Schema({
  formatted_address: String,
  geometry: {
    location: {
      lat: Number,
      lng: Number,
    },
    viewport: {
      northeast: {
        lat: Number,
        lng: Number
      },
      southwest: {
        lat: Number,
        lng: Number
      }
    },
  },
  icon: String,
  id: String,
  name: String,
  photos: Array,
  place_id: String,
  reference: String,
  types: Array
}, {collection: 'markers'})

module.exports = mongoose.model('Marker', markersSchema)
