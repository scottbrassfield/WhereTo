/* eslint-disable no-console */

import async from 'async'

import { browserHistory } from 'react-router'

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
  SHOW_MODAL,
  CLEAR_RESULTS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './actionTypes'

export const addOverview = ({ destination, startDate, endDate}, complete, tripId) => {
  return {
    type: ADD_OVERVIEW,
    destination,
    startDate,
    endDate,
    tripId,
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
      })
      .catch(err => { console.error(err) })
    }
  }
}

export const clearResults = (resultsType) => {
  return {
    type: CLEAR_RESULTS,
    resultsType
  }
}

export const addResults = (results, resultsType) => {
  return {
    type: ADD_RESULTS,
    results,
    resultsType
  }
}

export const showModal = (modal) => {
  return {
    type: SHOW_MODAL,
    modal
  }
}

export const getPlace = (search) => {
  return dispatch => {
    dispatch(clearResults('places'))
    fetch('/api/map/places?' + 'place=' + search)
      .then(res => res.json())
      .then(res => {
        let places = res.json.results
        dispatch(addResults(places, 'places'))
        dispatch(showModal('results'))
      })
  }
}

export const initiateTrip = (values, places, complete, tripId, username) => {
  return dispatch => {
    dispatch(clearMarkers())
    return dispatch(addMarkers(places)).then(() => {
      dispatch(addOverview(values, complete, tripId))
      browserHistory.push(`/users/${username}/trips/${tripId}`)
    })
  }
}

export const requestLogin = (credentials) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials
  }
}

export const confirmLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    isFetching: false,
    isAuthenticated: false,
    error
  }
}

export const requestSignup = (credentials) => {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials
  }
}

export const confirmSignup = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    isFetching: false,
    isAuthenticated: false,
    error
  }
}

export const userLogin = (credentials) => {
  return dispatch => {
    dispatch(requestLogin(credentials))
    return fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.message)
      dispatch(confirmLogin(credentials.username))
      dispatch(showModal(null))
      browserHistory.push(`/users/${credentials.username}/newTrip`)
    })
    .catch(err => {
      dispatch(loginError(err))
    })
  }
}

export const userSignup = (credentials) => {
  return dispatch => {
    dispatch(requestSignup(credentials))
    return fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.message)
      dispatch(confirmSignup())
      dispatch(showModal(null))
      browserHistory.push(`/users/${credentials.username}/newTrip`)
    })
    .catch(err => {
      console.log(err);
      dispatch(signupError(err))
    })
  }
}
