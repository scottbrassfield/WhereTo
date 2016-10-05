import * as Actions from './action-types';

export const addOverview = ({ destination, startDate, endDate }, complete) => {
  return {
    type: Actions.ADD_OVERVIEW,
    destination,
    startDate,
    endDate,
    complete
  }
}

export const updateOverview = (complete) => {
  return {
      type: Actions.UPDATE_OVERVIEW,
      complete
  }
}

export const addLodging = ({ lodging, nights }, id) => {
  return {
    type: Actions.ADD_LODGING,
    id,
    lodging,
    nights
  }
}

let nextPlanId = 0;
export const addPlan = ({ plan, startTime, endTime }) => {
  return {
    type: Actions.ADD_PLAN,
    planId: ++nextPlanId,
    plan,
    startTime,
    endTime
  }
}
