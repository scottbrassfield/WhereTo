import * as Actions from '../actions/action-types'

const initialState = {
  days: [ ]
}

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_OVERVIEW:
      return Object.assign({}, state, {destination: action.dest, startDate: action.start, endDate: action.end, overview: action.complete, currentDate: action.start});
    case Actions.UPDATE_OVERVIEW:
      return Object.assign({}, state, {overview: action.complete})
    default:
      return state;
  }
}

module.exports = itinerary;
