import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

const Itinerary = () => {
  return (
    <Paper id='itinerary'>
      <div id='itinerary-title'>
        <h2>Itinerary</h2>
        <h4>[Insert Date]</h4>
      </div>
      <Table id="itinerary-details">
        <TableHeader>
          <TableRow>
            <TableHeaderColumn className='time'>Time</TableHeaderColumn>
            <TableHeaderColumn>Plans</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true}>
          <TableRow>
            <TableRowColumn className='time'>2 PM</TableRowColumn>
            <TableRowColumn>Visit the Louvre</TableRowColumn>
            <TableRowColumn>Primary</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

module.exports = Itinerary;
