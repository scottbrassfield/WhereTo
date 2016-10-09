import { connect } from 'react-redux'
import Lodging from '../components/itinerary/Lodging'
import { updateLodging } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

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
