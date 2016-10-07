import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import days from './days-reducer'
import plans from './plans-reducer'
import overview from './overview-reducer'
import currentDay from './current-day-reducer'
import map from './map-reducer'



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
