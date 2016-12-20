import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Root from './js/components/Root'
import store from './js/store'

injectTapEventPlugin();
window.store = store;

render(
  <Root store = {store} />,
  document.getElementById('root')
)
