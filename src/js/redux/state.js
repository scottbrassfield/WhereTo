let state = {
  destination: '',
  beginDate: '',
  endDate: '',
  itinerary: {
    locations: [],
    lodging: [],
    plans: [
      {
        id: '',
        location: '',
        beginTime: '',
        endTime: '',
        backup: false,
      }
    ]
  },
  map: {
    markers: [],
  }
}

module.exports = state;
