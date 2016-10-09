import { combineReducers } from 'redux';
import { ADD_OVERVIEW, ADD_PLAN } from '../actions/actionTypes';
import { startTrip, addId } from './utilityFunctions';

const day = (state = {}, action) => {
  switch(action.type) {
    case ADD_PLAN:
      return { ...state,
        plans: addId(state.plans, action.id)
      }
     default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return { ...state,
        ...startTrip(undefined, action)
      }
    case ADD_PLAN:
      return { ...state,
        [action.dayId]: day(state[action.dayId], action)
      }
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
