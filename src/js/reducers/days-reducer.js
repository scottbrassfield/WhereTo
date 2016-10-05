import { combineReducers } from 'redux';
import { ADD_OVERVIEW, ADD_LODGING, ADD_PLAN } from '../actions/action-types';
import { startTrip, addLodging, updatePlanIds } from './case-functions/day-case-functions';

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
