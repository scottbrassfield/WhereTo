import { ADD_OVERVIEW, NEXT_DAY, PRIOR_DAY } from '../actions/actionTypes'

const currentDay = (state = 0, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return 1;
    case NEXT_DAY:
      return state < action.totalDays ? state + 1 : state
    case PRIOR_DAY:
      return state > 1 ? state - 1 : state
    default:
      return state;
  }
}

export default currentDay;
