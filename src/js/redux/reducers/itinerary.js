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
      backup: '',
    }
  ]
}

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OVERVIEW':
      return Object.assign({}, state, {destination: action.dest, startDate: action.start, endDate: action.end});
    default:
      return state;
  }
}

module.exports = itinerary;
