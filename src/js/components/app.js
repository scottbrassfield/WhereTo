import React from 'react';
import Overview from './overview/index'
import Itinerary from './itinerary/index'
import Map from './map/map'
// import LoadedMap from './map/map_stateless_composite'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <div id='left'>
          <Overview />
          <Map />
        </div>
        <Itinerary />
      </div>
    </MuiThemeProvider>
  )
}

module.exports = App;
