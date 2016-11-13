import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import days from './daysReducer'
import plans from './plansReducer'
import lodging from './lodgingReducer'
import overview from './overviewReducer'
import currentDay from './currentDayReducer'
import markers from './markersReducer'
import loadedMap from './loadedMapReducer'
import places from './placesReducer'

const entities = combineReducers({
  days,
  plans,
  lodging,
  markers
})

const rootReducer = combineReducers({
  form: formReducer,
  overview,
  entities,
  currentDay,
  loadedMap,
  places
})

export default rootReducer
