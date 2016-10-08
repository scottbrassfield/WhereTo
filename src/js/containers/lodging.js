import React from 'react'
import { connect } from 'react-redux'
import LodgingInput from '../components/itinerary/LodgingInput'
import LodgingSummary from '../components/itinerary/LodgingSummary'
import { updateLodging } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

let Lodging = ({ lodging, dayId, onButtonClick }) => {

  return (
    <div>
      <LodgingInput
        dayId={dayId}
        lodging={lodging}
      />
      <LodgingSummary
        dayId={dayId}
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
  return byId[currentDay] ? byId[currentDay].lodging : ''
}

const mapState = (state) => {
  return {
    lodging: getLodging(state),
    dayId: getDayId(state),
    initialValues: {lodging: getLodging(state)}
  }
}

const mapDispatch = ({
  onButtonClick: updateLodging
})

export default connect(mapState, mapDispatch)(Lodging)
