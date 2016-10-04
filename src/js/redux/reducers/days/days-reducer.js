import * as Actions from '../../actions/action-types';
import makeDays from './day-case-functions';

const initialState = {
  byId: {},
  allIds: [],
  currentDay: {}
}

const days = (state = initialState, action) => {
  switch(action.type) {
    case Actions.ADD_OVERVIEW:
      return Object.assign({}, state, makeDays(undefined, action));
    default:
      return state;
  }
}

export default days;
