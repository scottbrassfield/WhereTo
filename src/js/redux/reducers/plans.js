const plan = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_PLAN':
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
    case 'ADD_PLAN':
      return state.concat(plan(undefined, action))
    default:
      return state;
  }
}

module.exports = plans;
