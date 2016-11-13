import React from 'react'
import { connect } from 'react-redux'
import { addMarkers } from '../actions/actionCreators'

const Places = ({ show, places, dispatch }) => {

  if (!show) {
    return <div></div>
  } else {
    return (
      <div style={{position: 'fixed', top: '20%', left: '20%', border: '1px solid black'}}>
        <h1>Choose your destination</h1>
        { places.results.map(place => (
            <div
              key={place.id}
              onClick={() => dispatch(addMarkers([place]))}
            >
              {place.formatted_address}
            </div>
          )
        )}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    show: state.places.showResults,
    places: state.places.searchResults
  }
}

export default connect(mapState)(Places)
