import { ADD_OVERVIEW, NEXT_DAY, PREVIOUS_DAY } from '../actions/actionTypes'

const currentDay = (state = 0, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return 1;
    case NEXT_DAY:
      return state + 1
    case PREVIOUS_DAY:
      if (state === 1) {
        return state;
      } else {
        return state - 1
      }
    default:
      return state;
  }
}

export default currentDay;
