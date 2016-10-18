import React from 'react'
import { connect } from 'react-redux'
import Overview from './Overview'
import NewTrip from './NewTrip'
import Itinerary from './itinerary/index'
import LoadedMap from './map/LoadedMap'
import Lodging from '../containers/ConnectedLodging'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({ overview }) => {
  if (!overview) {
    return (
      <MuiThemeProvider>
        <NewTrip />
      </MuiThemeProvider>
    )
  } else {
    return (
      <MuiThemeProvider>
        <div>
          <div id='left'>
            <Overview />
            <Lodging />
            <LoadedMap />
          </div>
          <div id='right'>
            <Itinerary />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapState = (state) => {
  return { overview: state.overview.complete }
}

export default connect(mapState)(App);
