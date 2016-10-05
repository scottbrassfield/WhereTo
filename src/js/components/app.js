import React from 'react';
import Overview from './overview/index'
import Itinerary from './itinerary/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Overview />
        <Itinerary />
      </div>
    </MuiThemeProvider>
  )
}

module.exports = App;
