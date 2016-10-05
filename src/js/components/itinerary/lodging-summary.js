import React from 'react';
import { connect } from 'react-redux';
require('../../../stylesheets/components/itinerary.scss');

const LodgingSummary = ({ stay }) => {
  return (
    <div>
      <span style={{marginRight: '10px'}}>Staying:</span>
      <span>{ stay }</span>
    </div>
  )
}

const getLodging = ({ entities:{ days }, currentDay }) => {
  return days.byId[currentDay].lodging
}

const mapState = (state) => {
  return { stay: getLodging(state) }
}

module.exports = connect(mapState)(LodgingSummary)
