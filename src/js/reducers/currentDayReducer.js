import { NEXT_DAY, PRIOR_DAY } from '../actions/actionTypes'

const currentDay = (state = 0, action) => {
  switch(action.type) {
    case NEXT_DAY:
      return state < action.totalDays - 1 ? state + 1 : state
    case PRIOR_DAY:
      return state > 0 ? state - 1 : state
    default:
      return state;
  }
}

export default currentDay;
