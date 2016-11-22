/* eslint-disable no-console */

import async from 'async'

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
export const addPlan = (planDetails, dayId) => {
  return dispatch => {
    return fetch('/api/plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(Object.assign({}, planDetails))
    })
    .then(res => res.json())
    .then(planDetails => {
      dispatch({
          type: ADD_PLAN,
          property: 'plans',
          dayId,
          id: planId++,
          ...planDetails
        })
    })
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

export const addMarker = marker => {
  return {
    type: ADD_MARKER,
    id: markerId++,
    marker
  }
}

export const addMarkers = markers => {
  return dispatch => {
    if (Array.isArray(markers)) {
      return async.each(markers, (marker, cb) => {
        fetch('/api/markers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({}, marker))
          })
          .then(res => res.json())
          .then(marker => {
            dispatch(addMarker(marker))
            cb()
          })
          .catch(err => { console.error(err) })
      })
    } else {
      return fetch('/api/markers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({}, markers))
      })
      .then(res => res.json())
      .then(marker => {
        dispatch(addMarker(marker))
        console.log('Marker added to database')
      })
      .catch(err => { console.error(err) })
    }
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
    dispatch(clearResults())
    fetch('/api/map/places?' + 'place=' + search)
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
    dispatch(addMarkers(places)).then(() => {
      dispatch(addOverview(values, complete))
    })

  }
}
