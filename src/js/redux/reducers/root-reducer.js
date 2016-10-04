import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import days from './days/days-reducer';
import plans from './plans/plans-reducer';
import overview from './overview-reducer';
import currentDay from './current-day-reducer';


const entities = combineReducers({
  days,
  plans
})

const rootReducer = combineReducers({
  form: formReducer,
  overview,
  entities,
  currentDay
})

export default rootReducer;
