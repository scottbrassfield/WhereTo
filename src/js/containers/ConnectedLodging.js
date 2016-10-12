import { connect } from 'react-redux'
import LodgingInput from '../components/lodging/LodgingInput'
import { addLodging, showForm } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

const submitNights = (values, dispatch, tripDates, reset) => {
  dispatch(addLodging(values, tripDates))
  dispatch(showForm('lodging', false))
  reset()
}

const mapState = (state) => {
  return {
    overview: state.overview.complete,
    tripDates: state.overview.dates,

    formVisible: state.entities.lodging.formVisible
  }
}

const mapDispatch = ({
  onFormSubmit: submitNights,
  showForm
})

export default connect(mapState, mapDispatch)(LodgingInput)
