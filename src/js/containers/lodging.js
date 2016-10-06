import React from 'react'
import { connect } from 'react-redux'
import LodgingInput from '../components/itinerary/lodging-input'
import LodgingSummary from '../components/itinerary/lodging-summary'
import { updateLodging } from '../actions/action-creators'
import '../../stylesheets/config/config.scss'

let Lodging = ({ lodging, dayId, onButtonClick }) => {

  return (
    <div>
      <LodgingInput
        dayId={dayId}
        lodging={lodging}
      />
      <LodgingSummary
        dayId={dayId  }
        lodging={lodging}
        onButtonClick={onButtonClick}
      />
    </div>
  )
}

const getDayId = ({entities: { days: { byId} }, currentDay}) => {
  return byId ? currentDay : null
}

const getLodging = ({ entities: { days: { byId } }, currentDay }) => {
  return byId[currentDay] ? byId[currentDay].lodging : null
}

const mapState = (state) => {
  return {
    lodging: getLodging(state),
    dayId: getDayId(state)
  }
}

const mapDispatch = ({
  onButtonClick: updateLodging
})

Lodging = connect(mapState, mapDispatch)(Lodging)

export default Lodging
