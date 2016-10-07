import React from 'react'
import Overview from './overview/index'
import Itinerary from './itinerary/index'
import LoadedMap from './map/map'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <div id='left'>
          <Overview />
          <LoadedMap />
        </div>
        <Itinerary />
      </div>
    </MuiThemeProvider>
  )
}

export default App;
