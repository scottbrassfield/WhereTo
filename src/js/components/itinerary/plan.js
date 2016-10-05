import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

let Plan = ({ startTime, plan }) => {
  return (
      <TableRow>
        <TableRowColumn style={{width: '20%'}}>{startTime}</TableRowColumn>
        <TableRowColumn>{plan}</TableRowColumn>
        <TableRowColumn>Reservation</TableRowColumn>
      </TableRow>
  )
}

export default Plan
