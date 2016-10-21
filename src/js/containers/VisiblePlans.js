import React from 'react'
import { connect } from 'react-redux'
import PlanList from '../components/itinerary/PlanList'
import PlanInput from '../components/itinerary/PlanInput'
import moment from 'moment'

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

  return thePlans.map(plan => {
    let { startTime, endTime } = plan
    return Object.assign(
      {},
      plan,
      {startTime: moment(startTime).format('LT'), endTime: moment(endTime).format('LT')
    })
  })
}

const getPlans = ({entities: { days: { byId }, plans }, currentDay}) => {
  if (byId[currentDay]) {
    let planIds = byId[currentDay].plans;
    return mapIdsToPlans(planIds, plans)
  }
  return []
}

const getCurrentDate = ({ entities: { days: { byId }}, currentDay }) => {
  if (byId[currentDay]) {
    var currentDate = byId[currentDay].date.format('MM/DD/YYYY');
  }
  return currentDate
}

const mapState = (state) => {
  return {
    currentDay: state.currentDay,
    currentDate: getCurrentDate(state),
    plans: getPlans(state),
    formVisible: state.entities.plans.formVisible
  }
}

const VisiblePlans = connect(mapState)(Plans)

export default VisiblePlans
