import { ADD_OVERVIEW, UPDATE_OVERVIEW } from '../actions/actionTypes'
import { getTripDates } from './utilityFunctions'

const initialState = {
  complete: false,
}

const overview = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OVERVIEW:
      return Object.assign({}, state,
        {
          tripId: action.tripId,
          destination: action.destination,
          startDate: action.startDate,
          endDate: action.endDate,
          complete: action.complete,
          dates: getTripDates(undefined, action)
        }
      )
    case UPDATE_OVERVIEW:
      return Object.assign({}, state, { complete: action.complete })
    default:
      return state;
  }
}

export default overview;
