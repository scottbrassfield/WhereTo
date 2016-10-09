import { combineReducers } from 'redux';
import { ADD_PLAN, UPDATE_PLAN } from '../actions/actionTypes';

const plan = (state = {}, action) => {
  switch(action.type) {
    case ADD_PLAN:
      return { ...state,
          id: action.id,
          plan: action.plan,
          startTime: action.startTime,
          endTime: action.endTime
        }
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAN:
    case UPDATE_PLAN:
      return { ...state,
        [action.id]: plan(undefined, action)
      }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAN:
      return [...state, action.planId]
    default:
      return state;
  }
}

const plans = combineReducers({
  byId,
  allIds
})

export default plans;
