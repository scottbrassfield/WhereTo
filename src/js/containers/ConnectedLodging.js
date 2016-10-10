import { connect } from 'react-redux'
import Lodging from '../components/itinerary/Lodging'
import { addLodging, updateLodging } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

const getDayId = ({entities: { days: { byId} }, currentDay}) => {
  return byId ? currentDay : null
}

const findLodging = ({ entities: { lodging: { byId } }, currentDay }) => {
  let lodging;
  for (var prop in byId) {
    byId[prop].days.forEach( (dayId) => {
      if (dayId === currentDay) {
        lodging = byId[prop]
      }
    })
  }
  return {
    getName: () => lodging ? lodging.name : '',
    getNights: () => lodging ? lodging.nights : '',
    complete: () => lodging ? lodging.complete : '',
    getId: () => lodging ? lodging.id : '',
  }
}

const submitNights = ({lodging, nights}, dispatch, dayId, reset) => {
  dispatch(addLodging(lodging, nights, dayId))
  reset()
}

const mapState = (state) => {
  const lodging = findLodging(state)
  return {
    dayId: getDayId(state),
    id: lodging.getId(),
    lodging: lodging.getName(),
    initialValues: {
      lodging: lodging.getName(),
      nights: lodging.getNights()
    },
    complete: lodging.complete()
  }
}

const mapDispatch = ({
  onButtonClick: updateLodging,
  onFormSubmit: submitNights
})

export default connect(mapState, mapDispatch)(Lodging)
