import React from 'react'
import { connect } from 'react-redux'
import WrappedMap from './WrappedMap'
import '../../../stylesheets/config/config.scss'

const LoadedMap = ({ overview }) => {

  if (!overview) {
    return <div></div>
  }
  let style = {display: 'block', height: '500px', marginTop: '12px'}

  return (
    <WrappedMap
      containerElement={<div style={style} />}
      mapElement={<div style={style} />}
    />
  )
}

const mapState = (state) => {
  return {
    mapOptions: state.map.details,
    markers: state.map.markers,
    destination: state.overview.destination,
    overview: state.overview.complete,
  }
}

export default connect(mapState)(LoadedMap)
