import * as Actions from '../actions/action-types'

const initialState = {
  complete: false
}

const overview = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_OVERVIEW:
      return Object.assign({}, state,
        {
          destination: action.destination,
          startDate: action.startDate,
          endDate: action.endDate,
          complete: action.complete,
          currentDate: action.startDate,
        }
      )
    case Actions.UPDATE_OVERVIEW:
      return Object.assign({}, state, { complete: action.complete })
    default:
      return state;
  }
}

export default overview;
