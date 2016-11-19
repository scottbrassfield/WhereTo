import React from 'react'
import { connect } from 'react-redux'
import Overview from './Overview'
import NewTrip from './NewTrip'
import Itinerary from './itinerary/index'
import LoadedMap from './map/LoadedMap'
import Lodging from '../containers/ConnectedLodging'
import Places from '../containers/PlacesResults'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = ({ overview, showResults }) => {
  if (!overview) {
    return (
      <MuiThemeProvider>
        <div>
          <NewTrip />
          {showResults && <Places />}
        </div>
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
            {showResults && <Places />}
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
  return {
    overview: state.overview.complete,
    showResults: state.places.showResults
  }
}

export default connect(mapState)(App);
