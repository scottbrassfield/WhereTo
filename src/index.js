import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/components/app'
import store from './js/store'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

window.store = store;

ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
  document.getElementById('root')
)
