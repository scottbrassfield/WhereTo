import {
  ADD_OVERVIEW,
  UPDATE_OVERVIEW,
  ADD_LODGING,
  UPDATE_LODGING,
  ADD_PLAN,
  NEXT_DAY,
  PRIOR_DAY
} from './actionTypes'

import { initialize } from 'react-redux'

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

export const updateLodging = (id) => {
  return {
    type: UPDATE_LODGING,
    id
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

export const nextDay = (totalDays) => {
  return {
    type: NEXT_DAY,
    totalDays
  }
}

export const priorDay = () => {
  return {
    type: PRIOR_DAY
  }
}
