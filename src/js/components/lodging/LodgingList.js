import React from 'react'
import { Paper, Divider, RaisedButton } from 'material-ui/'
import { showForm } from '../../actions/actionCreators'
import '../../../stylesheets/config/config.scss'

const ListItem = ({name, startDate, endDate}) => (
  <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
    <li style={{listStyle: 'none', paddingTop: '10px', paddingBottom: '10px'}}>
      <div
        style={{display: 'inline-block'}}>
        {name}
      </div>
      <div
        style={{display: 'inline-block', position: 'absolute', right: '60px' }}>
        {startDate.format('MMM D')} - {endDate.format('MMM D')}
      </div>
    </li>

    <Divider />
  </div>

)


let LodgingList = ({ lodging, dispatch}) => {

  let list = [];
  for (var prop in lodging) {
    list.push(lodging[prop])
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
          onClick={() => dispatch(showForm('lodging', true))}
        />
      </Paper>
      <Paper>
        <ul style={{marginTop: '0px', position: 'relative', paddingLeft: '0px'}}>
          { list.map((item, index) => {
            return <ListItem name={item.name} startDate={item.startDate} endDate={item.endDate} key={index} />
          }) }
        </ul>
      </Paper>
    </div>
  )
}

export default LodgingList
