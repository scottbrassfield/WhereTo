const { createStore, combineReducers } = require('redux');
const itinerary = require('./reducers/itinerary');
const plans = require('./reducers/plans');
const { reducer: formReducer } = require('redux-form');

let reducers = combineReducers({
  itinerary: itinerary,
  plans: plans,
  form: formReducer
})

let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

module.exports = store;
