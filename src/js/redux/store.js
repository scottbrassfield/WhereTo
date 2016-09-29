const { createStore, combineReducers } = require('redux');
const overview = require('./reducers/overview');
const plans = require('./reducers/plans');
const { reducer: formReducer } = require('redux-form');

let reducers = combineReducers({
  overview: overview,
  plans: plans,
  form: formReducer
})

let store = createStore(reducers)

module.exports = store;
