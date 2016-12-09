import React from 'react'
import { connect } from 'react-redux'
import WrappedMap from './WrappedMap'

const LoadedMap = ({markers, ...rest}) => {

  let style = {display: 'block', height: '400px', marginTop: '12px'}

  return (
    <WrappedMap
      containerElement={<div style={style} />}
      mapElement={<div style={style} />}
      center={markers[0].place.geometry.location}
      markers={markers}
      {...rest}
    />
  )
}

const getMarkers = ({ entities: { markers: { byId } }}) => {
  let markerArray = [];
  for (var prop in byId) {
    markerArray.push(byId[prop])
  }
  return markerArray
}

const mapState = (state) => {
  return {
    markers: getMarkers(state),
    destination: state.overview.destination,
    overview: state.overview.complete,
  }
}

export default connect(mapState)(LoadedMap)
