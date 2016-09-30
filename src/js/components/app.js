import React from 'react';
import Input from './overview/input'
import Itinerary from './itinerary/itinerary'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Input />
        <Itinerary />
      </div>
    </MuiThemeProvider>
  )
}

module.exports = App;


      //
