import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import days from './daysReducer'
import plans from './plansReducer'
import lodging from './lodgingReducer'
import overview from './overviewReducer'
import currentDay from './currentDayReducer'
import markers from './markersReducer'
import loadedMap from './loadedMapReducer'
import results from './resultsReducer'
import modal from './modalReducer'
import user from './userReducer'

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
  results,
  modal,
  user
})

export default rootReducer
