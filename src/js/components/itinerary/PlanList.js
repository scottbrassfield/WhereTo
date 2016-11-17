import React from 'react'
import Plan from './Plan.js'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'

let PlanList = ({ plans }) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={{width: '20%'}}>Time</TableHeaderColumn>
          <TableHeaderColumn>Plans</TableHeaderColumn>
          <TableHeaderColumn>Options</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
        { plans.map(plan =>
            <Plan
              key={plan.id}
              {...plan}
            />
        )}
      </TableBody>
    </Table>
  )
}

export default PlanList
