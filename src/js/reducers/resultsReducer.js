import {
  ADD_RESULTS,
  CLEAR_RESULTS
} from '../actions/actionTypes'


const initialState = {
  places: []
}
export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_RESULTS:
      return { ...state, [action.resultsType]: action.results }
    case CLEAR_RESULTS:
      return { ...state, [action.restultsType]: []}
    default:
      return state
  }
}
