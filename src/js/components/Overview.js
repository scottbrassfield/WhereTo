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
        style={{display: 'inline-block', verticalAlign: 'middle', padding: '12px', maxWidth: '90%'}}
      >
        <div style={{fontSize: '24px', fontWeight: 'bold'}}>
          {destination}
        </div>
        <div style={{fontSize: '18px'}}>
          {startDate + ' — ' + endDate}
        </div>
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
      destination: state.entities.markers.byId[0].place.name,
      startDate: formatDate(state.overview.startDate),
      endDate: formatDate(state.overview.endDate),
      complete: state.overview.complete,
    }
  )
}

module.exports = connect(mapState, {updateOverview})(Overview);
