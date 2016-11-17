import React from 'react'
import { connect } from 'react-redux'
import { searchPlanLocation } from '../../actions/actionCreators'
import { TableRow, TableRowColumn, RaisedButton } from 'material-ui'

let Plan = ({ startTime, plan, dispatch }) => {
  return (
      <TableRow>
        <TableRowColumn style={{width: '20%'}}>{startTime}</TableRowColumn>
        <TableRowColumn>{plan}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton onClick={() => { dispatch(searchPlanLocation(plan))}}>
            Add Marker
          </RaisedButton>
        </TableRowColumn>
      </TableRow>
  )
}

export default connect()(Plan)
