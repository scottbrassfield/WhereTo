import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import days from './daysReducer'
import plans from './plansReducer'
import overview from './overviewReducer'
import currentDay from './currentDayReducer'
import map from './mapReducer'

const entities = combineReducers({
  days,
  plans
})

const rootReducer = combineReducers({
  form: formReducer,
  overview,
  entities,
  currentDay,
  map
})

export default rootReducer;