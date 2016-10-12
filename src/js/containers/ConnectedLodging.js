import { connect } from 'react-redux'
import LodgingInput from '../components/lodging/LodgingInput'
import { addLodging, showForm } from '../actions/actionCreators'
import '../../stylesheets/config/config.scss'

const getDayId = ({entities: { days: { byId} }, currentDay}) => {
  return byId ? currentDay : null
}
//
// const findLodging = ({ entities: { lodging: { byId } }, currentDay }) => {
//   let lodging;
//   for (var prop in byId) {
//     byId[prop].days.forEach( (dayId) => {
//       if (dayId === currentDay) {
//         lodging = byId[prop]
//       }
//     })
//   }
//   return {
//     getName: () => lodging ? lodging.name : '',
//     complete: () => lodging ? lodging.complete : '',
//     getId: () => lodging ? lodging.id : '',
//   }
// }


const submitNights = (values, dispatch, tripDates, reset) => {
  dispatch(addLodging(values, tripDates))
  reset()
}

const mapState = (state) => {
  // const lodging = findLodging(state)
  return {
    overview: state.overview.complete,
    tripDates: state.overview.dates,
    // dayId: getDayId(state),
    // id: lodging.getId(),
    // lodging: lodging.getName(),
    // initialValues: {
      // lodging: lodging.getName()
    // },
    formVisible: state.entities.lodging.formVisible
  }
}

const mapDispatch = ({
  onFormSubmit: submitNights,
  showForm
})

export default connect(mapState, mapDispatch)(LodgingInput)
