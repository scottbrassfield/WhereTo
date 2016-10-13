import { combineReducers } from 'redux'
import { ADD_LODGING, UPDATE_LODGING, SHOW_FORM } from '../actions/actionTypes';
import { lodgingDays } from './utilityFunctions'

const stay = (state = {}, action) => {
  switch (action.type) {
    case ADD_LODGING:
      return {...state,
        id: action.id,
        name: action.name,
        startDate: action.startDate,
        endDate: action.endDate,
        days: lodgingDays(undefined, action)
      }
    case UPDATE_LODGING:
      return {
        ...state,
        complete: action.complete
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_LODGING:
      return {
        ...state,
        [action.id]: stay(undefined, action)
      }
    case UPDATE_LODGING:
      return {
        ...state,
        [action.id]: stay(state[action.id], action)
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


const formVisible = (state = false, action) => {
  switch (action.type) {
    case SHOW_FORM:
      if (action.form === 'lodging') {
        state = action.show
        return state;
      } else {
        return state;
      }
    default:
      return state;
  }
}

const lodging = combineReducers({
  byId,
  allIds,
  formVisible
})

export default lodging
