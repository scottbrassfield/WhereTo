import React from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import uuidV4 from 'uuid/v4'
import { initiateTrip, addMarkers, showModal} from '../actions/actionCreators'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'

const Places = ({ dispatch, places, onClick, modal, ...rest }) => {
  return (
    <Modal
      general={{
        show: modal === 'results',
        size: 'large',
        keyboard: true,
        onHide: () => { dispatch(showModal(null)) }
      }}
      header={{ closeButton: true }}
      {...rest}
    >
      <Table onRowSelection={row => {onClick(places[row])}}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Location</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} displayRowCheckbox={false}>
          { places && places.map(place => (
            <TableRow key={place.id} >
              <TableRowColumn>{place.name}</TableRowColumn>
              <TableRowColumn>{place.formatted_address}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Modal>
  )
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    onClick: (place) => {
      const { overview, values, username} = ownProps
      if (!overview) {
        const tripId = uuidV4()
        dispatch(initiateTrip(values, place, true, tripId, username))
        .then(() => {
          dispatch(showModal(null))
        })
      } else {
        dispatch(addMarkers(place))
        showModal(null)
      }

    },
    onHide: () => {
      dispatch(showModal(null))
    },
    dispatch
  }
}

export default connect(null, mapDispatch)(Places)
