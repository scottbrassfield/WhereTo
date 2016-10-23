import React from 'react'
import { connect } from 'react-redux'
import WrappedMap from './WrappedMap'
import '../../../stylesheets/config/config.scss'

const LoadedMap = ( ) => {

  let style = {display: 'block', height: '400px', marginTop: '12px'}

  return (
    <WrappedMap
      containerElement={<div style={style} />}
      mapElement={<div style={style} />}
    />
  )
}

const mapState = (state) => {
  return {
    markers: state.entities.markers,
    destination: state.overview.destination,
    overview: state.overview.complete,
  }
}

export default connect(mapState)(LoadedMap)
