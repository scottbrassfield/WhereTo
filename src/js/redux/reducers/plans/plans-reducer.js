import * as Actions from '../../actions/action-types';

const plan = (state = {}, action) => {
  switch(action.type) {
    case Actions.ADD_PLAN:
      return (Object.assign({}, state,
        {
          id: action.id,
          location: action.location,
          beginTime: action.beginTime,
          endTime: action.endTime
        })
      )
    default:
      return state;
  }
}

const plans = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_PLAN:
      return state.concat(plan(undefined, action))
    default:
      return state;
  }
}

export default plans;
