const initialState = {
  destination: '',
  startDate: '',
  endDate: '',
  locations: [],
  lodging: [],
  plans: [
    {
      location: '',
      startTime: '',
      endTime: '',
      backup: false,
    }
  ]
}

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case 'OVERVIEW':
      return Object.assign({}, state, {destination: action.dest, startDate: action.start, endDate: action.end, overview: action.complete});
    case 'UPDATE_OVERVIEW':
      return Object.assign({}, state, {overview: action.complete})
    default:
      return state;
  }
}

module.exports = itinerary;
