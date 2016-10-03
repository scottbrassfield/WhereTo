import { createStore, combineReducers } from 'redux';
import itinerary from './reducers/itinerary';
// import plans from './reducers/plans';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  itinerary,
  form: formReducer
})

let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

module.exports = store;
