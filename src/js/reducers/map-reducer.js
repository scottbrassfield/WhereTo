import { combineReducers } from 'redux'
import { SAVE_SEARCH, ADD_OVERVIEW, LOAD_MAP } from '../actions/action-types'
import { mapSearch } from './case-functions/map-case-functions'

const main = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAP:
      return Object.assign({}, state, action.map)
    default:
      return state;
  }
}

const initialMarkerState = [
  {
    position: {lat: 48.858093, lng: 2.375},
    title: ''
  }
]

const markers = (state = initialMarkerState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const initialDetailState = {
  center: {lat: 48.858093, lng: 2.294694},
  zoom: 8,
}

const details = (state = initialDetailState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const searchResults = (state = [], action) => {
  switch (action.type) {
    case SAVE_SEARCH:
    // case ADD_OVERVIEW:
      return state.concat(mapSearch(undefined, action))
    default:
      return state;
  }
}

const loaded = (state = false, action) => {
  switch(action.type) {
    case LOAD_MAP:
      state = true;
      return state;
    default:
      return state;
  }
}

const map = combineReducers({
  main,
  markers,
  details,
  searchResults,
  loaded
})

export default map
