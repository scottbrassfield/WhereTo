import React from 'react'
import { connect } from 'react-redux'
import Overview from './Overview'
import Itinerary from './itinerary/index'
import LoadedMap from './map/LoadedMap'
import Lodging from '../containers/ConnectedLodging'
import Places from '../containers/PlacesResults'

import '../../stylesheets/components/trip.scss'


const Trip = ({ showResults }) => {
  return (
    <div className='trip-main'>
      <div className='main-left'>
        <Overview />
        <Lodging />
        <LoadedMap />
        {showResults && <Places />}
      </div>
      <div className='main-right'>
        <Itinerary />
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    showResults: state.results.places === 'results'
  }
}

export default connect(mapState)(Trip);
