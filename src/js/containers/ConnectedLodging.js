import React from 'react'
import { connect } from 'react-redux'
import LodgingInput from '../components/lodging/LodgingInput'
import LodgingList from '../components/lodging/LodgingList'
import { addLodging, showForm } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

const Lodging = (props) => {
  return (
    <div>
      <LodgingList  {...props} />
      <LodgingInput {...props} />
    </div>
  )
}

export const submitNights = (values, dispatch, tripDates, reset) => {
  dispatch(addLodging(values, tripDates))
  dispatch(showForm('lodging', false))
  reset()
}

const getLodgingById = ({ entities: { lodging } }) => lodging.byId ? lodging.byId : ''

const mapState = (state) => {
  return {
    overview: state.overview.complete,
    tripDates: state.overview.dates,
    formVisible: state.entities.lodging.formVisible,
    lodging: getLodgingById(state)
  }
}

export default connect(mapState)(Lodging)
