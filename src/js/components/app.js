import React from 'react';
import Overview from './overview/overview'
import Itinerary from './itinerary/itinerary'
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
