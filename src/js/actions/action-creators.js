import {
  ADD_OVERVIEW,
  UPDATE_OVERVIEW,
  ADD_LODGING,
  ADD_PLAN
} from './action-types'

export const addOverview = ({ destination, startDate, endDate }, complete) => {
  return {
    type: ADD_OVERVIEW,
    destination,
    startDate,
    endDate,
    complete
  }
}

export const updateOverview = (complete) => {
  return {
      type: UPDATE_OVERVIEW,
      complete
  }
}

export const addLodging = ({ lodging, nights }, id) => {
  return {
    type: ADD_LODGING,
    id,
    lodging,
    nights
  }
}

let nextPlanId = 0;
export const addPlan = ({ plan, startTime, endTime }, id) => {
  return {
    type: ADD_PLAN,
    id,
    planId: ++nextPlanId,
    plan,
    startTime,
    endTime
  }
}
