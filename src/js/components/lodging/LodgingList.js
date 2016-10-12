import React from 'react'
import { connect } from 'react-redux'
import { Paper, RaisedButton } from 'material-ui/'
import { showForm } from '../../actions/actionCreators'
import '../../../stylesheets/components/itinerary.scss'

let LodgingList = ({ dispatch }) => {
  return (
    <Paper
      style={{width: '100%', position: 'relative', marginTop: '10px'}}>
      <div
        style={{fontSize: '30px', fontWeight: 'bold', display: 'inline-block', marginRight: '40px', padding: '12px', verticalAlign: 'middle'}}>
        Lodging
      </div>
      <div
        style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '20px'}}>
      </div>
      <RaisedButton
        label='Add Hotel'
        style={{display: 'inline-block', position: 'absolute', top: '20%', right: '30px'}}
        onClick={() => dispatch(showForm('lodging', true))}
      />
    </Paper>
  )
}

export default connect()(LodgingList)
