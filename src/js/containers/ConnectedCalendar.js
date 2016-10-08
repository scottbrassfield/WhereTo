import { connect } from 'react-redux';
import Calendar from '../components/itinerary/Calendar'
import { nextDay, priorDay } from '../actions/actionCreators'

const getDate = ({entities: { days: { byId } }, currentDay}) => {
  return byId[currentDay] ? byId[currentDay].date.format('MMM D') : null
}

const getTotalDays = ({entities: { days: { byId } }}) => {
  return byId ? Object.keys(byId).length : null
}

const mapState = (state) => {
  return {
    currentDay: getDate(state),
    totalDays: getTotalDays(state)
  }
}

const mapDispatch = ({
  nextDay,
  priorDay
})

const ConnectedCalendar = connect(mapState, mapDispatch)(Calendar)

export default ConnectedCalendar
