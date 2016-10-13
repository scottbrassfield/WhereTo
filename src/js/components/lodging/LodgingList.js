import React from 'react'
import { Paper, RaisedButton } from 'material-ui/'
import { showForm } from '../../actions/actionCreators'
import '../../../stylesheets/components/itinerary.scss'

const ListItem = (name, startDate, endDate) => {
  <li>
    <div style={{display: 'inline-block'}}>{name}</div>
    <div style={{display: 'inline-block'}}>{startDate - endDate}</div>
  </li>
}


let LodgingList = (props) => {
  console.log(props)
  let list = [];
  for (var prop in props.lodging) {
    list.push(props.lodging[prop])
  }

  return (
    <div>
      <Paper
        style={{width: '100%', position: 'relative', marginTop: '10px'}}>
        <div
          style={{fontSize: '25px', fontWeight: 'bold', display: 'inline-block', padding: '12px', verticalAlign: 'middle'}}>
          Lodging Summary
        </div>
        <RaisedButton
          label='+ New Hotel'
          color='primary'
          style={{display: 'inline-block', position: 'absolute', top: '15%', right: '6%', fontSize: '12px'}}
          labelStyle={{fontSize: '12px'}}
          onClick={() => showForm('lodging', true)}
        />
      </Paper>
      <Paper>
        <ul>
          { list.map((item) => {
            return <ListItem name={item.name} startDate={item.startDate} endDate={item.endDate} />
          }) }
        </ul>
      </Paper>
    </div>
  )
}

export default LodgingList
