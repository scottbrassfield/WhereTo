import { combineReducers } from 'redux';
import { days } from './days/days-reducer'
import plans from './plans/plans-reducer'

const entities = combineReducers({
  days,
  plans
})

export default entities;
