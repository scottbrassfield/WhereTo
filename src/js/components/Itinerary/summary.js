import React from 'react'
import { connect } from 'react-redux'
require('../../../stylesheets/components/itinerary.scss')

const Summary = ({ destination, startDate, endDate }) => {
  return (
    <div id='summary'>
      <h1>Trip Details</h1>
      <div>
        <span>Destination:</span>
        <span>{ destination }</span>
      </div>
      <div>
        <span>Start Date:</span>
        <span>{ startDate }</span>
      </div>
      <div>
        <span>End Date:</span>
        <span>{ endDate }</span>
      </div>
    </div>
  )
}

function mapState(state) {
  let itinerary = state.itinerary;
  return (
    {
      destination: itinerary.destination,
      startDate: itinerary.startDate,
      endDate: itinerary.endDate
    }
  )
}


module.exports = connect(mapState)(Summary);
