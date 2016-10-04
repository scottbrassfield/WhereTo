import { ADD_OVERVIEW } from '../actions/action-types'

const currentDay = (state = 0, action) => {
  switch(action.type) {
    case ADD_OVERVIEW:
      return 1
    default:
      return state;
  }
}

export default currentDay;
