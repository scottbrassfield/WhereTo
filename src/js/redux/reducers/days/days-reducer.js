import * as Actions from '../../actions/action-types';
import { makeDays, addLodging } from './day-case-functions';

const initialState = {
  byId: {},
  allIds: [],
  currentDay: {}
}

const days = (state = initialState, action) => {
  switch(action.type) {
    case Actions.ADD_OVERVIEW:
      return Object.assign(
        {}, state,
        makeDays(undefined, action));
    case Actions.ADD_LODGING:
      return Object.assign(
        {}, state,
        {currentDay: addLodging(state, action)})
    default:
      return state;
  }
}

export default days;
