import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, /*TableRowColumn*/} from 'material-ui/Table'

const Plans = () => {
  return (
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn
            style={{width: '20%'}}>
            Time
          </TableHeaderColumn>
          <TableHeaderColumn>
            Plans
          </TableHeaderColumn>
          <TableHeaderColumn>
            Status
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
      </TableBody>
    </Table>
  )
}

module.exports = Plans
