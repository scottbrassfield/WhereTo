import { combineReducers } from 'redux'
import { ADD_LODGING, UPDATE_LODGING } from '../actions/actionTypes';

const stay = (state = {}, action) => {
  switch (action.type) {
    case ADD_LODGING:
      return {...state,
        id: action.id,
        days: action.days,
        name: action.name,
        complete: true
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_LODGING:
    case UPDATE_LODGING:
      return {
        ...state,
        [action.id]: stay(undefined, action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_LODGING:
      return [...state, action.id]
    default:
      return state
  }
}

const lodging = combineReducers({
  byId,
  allIds
})

export default lodging
