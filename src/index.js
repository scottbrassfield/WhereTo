const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const App = require('./js/components/app');
const store = require('./js/redux/store');

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
