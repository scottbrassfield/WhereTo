let state = {
  destination: '',
  beginDate: '',
  endDate: '',
  itinerary: [
    {
      id: '',
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
    }
  ],
  map: {
    markers: [],
  }
}

module.exports = state;
