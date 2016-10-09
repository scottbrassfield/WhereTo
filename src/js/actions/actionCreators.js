import {
  ADD_OVERVIEW,
  UPDATE_OVERVIEW,
  ADD_LODGING,
  UPDATE_LODGING,
  ADD_PLAN,
  NEXT_DAY,
  PRIOR_DAY
} from './actionTypes'

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

let lodgingId = 0
export const addLodging = ({ lodging, nights }, dayId) => {
  return {
    type: ADD_LODGING,
    dayId,
    id: lodgingId++,
    name: lodging,
    nights
  }
}

export const updateLodging = (dayId, initialize) => {
  return {
    type: UPDATE_LODGING,
    dayId,
    initialize
  }
}

let planId = 0
export const addPlan = ({ plan, startTime, endTime }, dayId) => {
  return {
    type: ADD_PLAN,
    property: 'plans',
    dayId,
    id: planId++,
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
