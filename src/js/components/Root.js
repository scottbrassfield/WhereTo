import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './app'
import Home from './Home'
import Dashboard from './Dashboard'
import NewTrip from './NewTrip'
import Trip from './Trip'

const Root = ({store}) => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
          <Route path='user'>
            <IndexRoute component={Dashboard} />
            <Route path='trips/:tripId' component={Trip} />
            <Route path='newTrip' component={NewTrip} />
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

export default Root
