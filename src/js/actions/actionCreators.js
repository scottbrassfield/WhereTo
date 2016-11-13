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

export const setInitialMarker = places => {
  return dispatch => {
    dispatch(clearMarkers())
    dispatch(addMarkers(places))
  }
}

export const retrySearch = message => {
    window.alert(message)
}

export const clearResults = () => {
  return {
    type: CLEAR_RESULTS
  }
}
export const showResults = (results) => {
  return (dispatch, getState) => {
    let show = getState().places.showResults
    dispatch({ type: ADD_RESULTS, results }),
    dispatch({ type: SHOW_RESULTS, show: !show})
  }
}

export const initiateTrip = (values, complete) => {
  return dispatch => {
    return fetch('/map/places?' + 'place=' + values.destination)
      .then(res => {
        return res.json()
      })
      .then(places => {
        let results = places.json.results
        if (!results.length) {
          console.log(0)
          retrySearch('Your destination didn\'t yield any results. Perhaps try again with more detail')
        } else if (results.length === 1) {
          console.log(1)
          dispatch(setInitialMarker(results))
          dispatch(addOverview(values, complete))
        } else {
          console.log('many')
          dispatch(showResults(results))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
