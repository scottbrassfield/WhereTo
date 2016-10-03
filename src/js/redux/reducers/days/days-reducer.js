import * as Actions from '../../actions/action-types';
import makeDays from './make-days';

const days = (state = {}, action) => {
  switch(action.type) {
    case Actions.ADD_OVERVIEW:
      return Object.assign({}, state, makeDays(undefined, action));
    default:
      return state;
  }
}

export default days;
