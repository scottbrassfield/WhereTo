import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { initiateTrip, addMarkers, toggleResults} from '../actions/actionCreators'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'

const Places = ({ show, places, onClick, onHide, title }) => {
  return (
    <Modal bsSize='large' show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table onRowSelection={onClick}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            { places && places.map(place => (
              <TableRow key={place.id}>
                <TableRowColumn>{place.name}</TableRowColumn>
                <TableRowColumn>{place.formatted_address}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
