import React from 'react'
import { connect } from 'react-redux'
import PlanList from '../components/itinerary/PlanList'
import PlanInput from '../components/itinerary/PlanInput'

const Plans = (props) => {
  return (
    <div>
      <PlanInput  {...props} />
      <PlanList {...props} />
    </div>
  )
}

const mapIdsToPlans = (planIds, plans) => {
  let thePlans = [];
  for (var plan in plans.byId) {
    planIds.forEach(id => {
      if (id.toString() === plan.toString()) {
        thePlans.push(plans.byId[plan])
      }
    })
  }
  thePlans.sort((a, b) => {
    return a.startTime - b.startTime
  })
  return thePlans
}

const getPlans = ({entities: { days: { byId }, plans }, currentDay}) => {
  if (byId[currentDay]) {
    let planIds = byId[currentDay].plans;
    return mapIdsToPlans(planIds, plans)
  }
  return []
}

const mapState = (state) => {
  return {
    currentDay: state.currentDay,
    plans: getPlans(state),
    formVisible: state.entities.plans.formVisible
  }
}

const VisiblePlans = connect(mapState)(Plans)

export default VisiblePlans
