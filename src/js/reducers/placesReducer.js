import { combineReducers } from 'redux'
import {
  ADD_RESULTS,
  SHOW_RESULTS,
  CLEAR_RESULTS
} from '../actions/actionTypes'

const searchResults = (state = [], action) => {
  switch(action.type) {
    case ADD_RESULTS:
      return [ ...state, ...action.results]
    case CLEAR_RESULTS:
      return []
    default:
      return state
  }
}

const showResults = (state = false, action) => {
  switch(action.type) {
    case SHOW_RESULTS:
      return action.show
    default:
      return state
  }
}

export default combineReducers({
  searchResults,
  showResults
})
