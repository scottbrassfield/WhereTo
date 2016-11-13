import React from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { SHOW_RESULTS } from '../actions/actionTypes'
import { addMarkers, addOverview, clearMarkers } from '../actions/actionCreators'
import { Modal } from 'react-bootstrap'

const Places = ({ show, places, values, dispatch }) => {
  return (
    <Modal show={show} onHide={() => dispatch({type: SHOW_RESULTS, show: false})}>
      <Modal.Header>
        <Modal.Title>Choose your destination</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { places && places.map(place => (
            <div
              key={place.id}
              onClick={() => {
                dispatch(clearMarkers())
                dispatch(addMarkers([place]))
                dispatch(addOverview(values, true))
                dispatch({type: SHOW_RESULTS, show: false})
              }}
            >
              {place.formatted_address}
            </div>
          )
        )}
      </Modal.Body>
    </Modal>
  )
}

const mapState = (state) => {

  const selector = formValueSelector('overview')

  return {
    show: state.places.showResults,
    places: state.places.searchResults,
    values: selector(state, 'destination', 'startDate', 'endDate')
  }
}

export default connect(mapState)(Places)
