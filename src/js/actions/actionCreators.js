/* eslint-disable no-console */

import {
  ADD_OVERVIEW,
  UPDATE_OVERVIEW,
  ADD_LODGING,
  UPDATE_LODGING,
  ADD_PLAN,
  NEXT_DAY,
  PRIOR_DAY,
  SHOW_FORM,
  ADD_MARKER,
  CLEAR_MARKERS,
  ADD_RESULTS,
  SHOW_RESULTS,
  CLEAR_RESULTS
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

export const clearMarkers = () => {
  markerId = 0
  return {
    type: CLEAR_MARKERS
  }
}

export const addMarkers = markers => {
  return dispatch => {
    markers.forEach(marker => {
      dispatch({
        type: ADD_MARKER,
        id: markerId++,
        marker
      })
    })
  }
}

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS
  }
}

export const addResults = (results) => {
  return {
    type: ADD_RESULTS,
    results
  }
}

export const showResults = (show) => {
  return {
    type: SHOW_RESULTS,
    show
  }
}

export const toggleResults = () => {
  return (dispatch, getState) => {
    let show = getState().places.showResults
    dispatch(showResults(!show))
  }
}

export const getPlace = (search) => {
  return dispatch => {
    fetch('/map/places?' + 'place=' + search)
      .then(res => res.json())
      .then(res => {
        let places = res.json.results
        dispatch(addResults(places))
        dispatch(toggleResults())
      })
  }
}

export const initiateTrip = (values, places, complete) => {
  return dispatch => {
    dispatch(clearMarkers())
    dispatch(addMarkers(places))
    dispatch(addOverview(values, complete))
  }
}


//
// export const searchPlanLocation = (search) => {
//
//   return dispatch => {
//     getPlace(search).then(res => {
//       if (res.length === 1) {
//         dispatch(addMarkers(res))
//       } else {
//         dispatch(addResults(res))
//         dispatch(toggleResults())
//       }
//     })
//     .catch(err => { console.error(err) })
//   }
// }
