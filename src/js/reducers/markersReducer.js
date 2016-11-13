import { combineReducers } from 'redux'
import { ADD_MARKER } from '../actions/actionTypes'

const marker = (state = {}, action) => {
  switch(action.type) {
    case ADD_MARKER:
      return {
        ...state,
        id: action.id,
        place: action.marker
      }
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_MARKER:
      return {
        ...state,
        [action.id]: marker(undefined, action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_MARKER:
      return [...state, action.id]
    default:
      return state
  }
}
const markers = combineReducers({
  byId,
  allIds,
})

export default markers
