import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { initiateTrip, addMarkers, toggleResults} from '../actions/actionCreators'

const Places = ({ show, places, onClick, onHide, title }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { places && places.map(place => (
            <div
              key={place.id}
              onClick={onClick}
            >
              {place.name}
            </div>
          )
        )}
      </Modal.Body>
    </Modal>
  )
}


const mapDispatch = (dispatch, ownProps) => {
  return {
    onClick: () => {
      const { overview, values, places } = ownProps
      if (!overview) {
        dispatch(initiateTrip(values, places, true))
      } else {
        dispatch(addMarkers(places))
      }
      dispatch(toggleResults())
    },
    onHide: () => {
      dispatch(toggleResults())
    },
    dispatch
  }
}

export default connect(null, mapDispatch)(Places)
