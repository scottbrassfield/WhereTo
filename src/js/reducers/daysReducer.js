import { combineReducers } from 'redux';
import { ADD_OVERVIEW, ADD_LODGING, ADD_PLAN, UPDATE_LODGING } from '../actions/actionTypes';
import { startTrip, addLodging, removeLodging, updatePlanIds } from './caseFunctions/dayCaseFunctions';

const byId = (state = {}, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return Object.assign(
        {}, state,
        startTrip(undefined, action)
      );
    case ADD_LODGING:
      return Object.assign({}, state,
        { [action.id]: addLodging(state, action) }
      );
    case UPDATE_LODGING:
      return Object.assign({}, state,
        { [action.id]: removeLodging(state, action) })
    case ADD_PLAN:
      return Object.assign({}, state,
        { [action.id]: updatePlanIds(state, action) }
      );
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return Object.keys(startTrip(undefined, action))
    default:
      return state;
  }
}

const days = combineReducers({
  byId,
  allIds
})

export default days;