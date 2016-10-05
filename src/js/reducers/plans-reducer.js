import { ADD_PLAN, UPDATE_PLAN } from '../actions/action-types';
import { combineReducers } from 'redux';

const plan = (state = {}, action) => {
  switch(action.type) {
    case ADD_PLAN:
      return (Object.assign({}, state,
        {
          id: action.planId,
          plan: action.plan,
          startTime: action.startTime,
          endTime: action.endTime
        })
      )
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAN:
    case UPDATE_PLAN:
      return Object.assign({}, state,
        { [action.planId]: plan(undefined, action) })
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAN:
      return state.concat(action.planId)
    default:
      return state;
  }
}

const plans = combineReducers({
  byId,
  allIds
})

export default plans;
