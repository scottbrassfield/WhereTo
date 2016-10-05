import { connect } from 'react-redux'
import Plans from '../components/itinerary/plans.js'

const mapIdsToPlans = (planIds, plans) => {
  let thePlans = [];
  for (var plan in plans.byId) {
    planIds.forEach(id => {
      if (id.toString() === plan.toString()) {
        thePlans.push(plans.byId[plan])
      }
    })
  }
  return thePlans
}

const getPlans = ({entities: { days, plans }, currentDay}) => {
  if (currentDay) {
    if (days.byId[currentDay].hasOwnProperty('plans')) {
      let planIds = days.byId[currentDay].plans;
      return mapIdsToPlans(planIds, plans)
    }
  }
  return []
}

const mapState = (state) => {
  return {
    currentDay: state.currentDay,
    plans: getPlans(state)
  }
}

const VisiblePlans = connect(mapState)(Plans)

export default VisiblePlans
