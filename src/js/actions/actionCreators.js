import {
  ADD_OVERVIEW,
  UPDATE_OVERVIEW,
  ADD_LODGING,
  UPDATE_LODGING,
  ADD_PLAN,
  NEXT_DAY,
  PRIOR_DAY,
  SHOW_FORM,
  ADD_MARKER
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
export const addLodging = ({ lodging, startDate, endDate }, tripDates) => {
  return {
    type: ADD_LODGING,
    id: lodgingId++,
    name: lodging,
    startDate,
    endDate,
    tripDates
  }
}

export const updateLodging = (id) => {
  return {
    type: UPDATE_LODGING,
    id,
    complete: false
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

export const showForm = (form, bool) => {
  return {
    type: SHOW_FORM,
    form,
    show: bool
  }
}

let markerId = 0
export const addMarker = (place) => {
  return {
    type: ADD_MARKER,
    id: markerId++,
    place
  }
}

export const getMainMarker = query => {
  return dispatch => {
    return fetch('/map/places?' + 'place=' + query)
      .then( res => {
        return res.json()
      })
      .then( place => {
        let marker = place.json.results[0]
        dispatch(addMarker(marker))
      })
  }
}
