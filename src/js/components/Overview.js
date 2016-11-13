import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import { updateOverview } from '../actions/actionCreators';

const Overview = ({ destination, startDate, endDate, complete, updateOverview}) => {

  return (
    <Paper
      style={{marginTop: '30px', width: '100%', position: 'relative'}}>
      <div
        style={{fontSize: '30px', fontWeight: 'bold', display: 'inline-block', marginRight: '40px', padding: '12px', verticalAlign: 'middle'}}>
        {destination}
      </div>
      <div
        style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '20px'}}>
        {startDate + ' — ' + endDate}
      </div>
      <RaisedButton
        label='Update'
        onClick={() => updateOverview(!complete)}
        style={{display: 'inline-block', position: 'absolute', top: '20%', right: '30px'}}
      />
    </Paper>
  )
}

const formatDate = (date) => moment(date).format('M/D/YY')

const mapState = (state) => {
  return (
    {
      destination: state.entities.markers.byId[0].place.formatted_address,
      startDate: formatDate(state.overview.startDate),
      endDate: formatDate(state.overview.endDate),
      complete: state.overview.complete,
    }
  )
}

module.exports = connect(mapState, {updateOverview})(Overview);
