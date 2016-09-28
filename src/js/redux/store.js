const { createStore, combineReducers } = require('redux');
const overview = require('./reducers/overview');
const plans = require('./reducers/plans');

let reducers = combineReducers({
  overview: overview,
  plans: plans
})

let store = createStore(reducers)

module.exports = store;
