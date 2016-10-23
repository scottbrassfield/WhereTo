import { LOAD_MAP } from '../actions/actionTypes'

const loadedMap = (state = false, action) => {
  switch(action.type) {
    case LOAD_MAP:
      state = true;
      return state;
    default:
      return state;
  }
}

export default loadedMap
