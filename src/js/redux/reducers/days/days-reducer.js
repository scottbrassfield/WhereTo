import { combineReducers } from 'redux';
import { ADD_OVERVIEW, ADD_LODGING } from '../../actions/action-types';
import { startTrip, addLodging } from './day-case-functions';

const byId = (state = {}, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return Object.assign(
        {}, state,
        startTrip(undefined, action)
      );
    case ADD_LODGING:
      return Object.assign(
        {}, state,
        addLodging(state, action)
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
