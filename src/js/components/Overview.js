import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import '../../stylesheets/components/overview.scss';
import { updateOverview } from '../actions/actionCreators';

const Overview = ({ destination, startDate, endDate, complete, updateOverview}) => {

  var summaryClass = classNames({
    'hidden': !complete,
    'active': complete
  })

  return (
    <Paper
      id='summary'
      className={ summaryClass }
      style={{width: '100%', position: 'relative'}}>
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

const mapState = (state) => {
  return (
    {
      destination: state.overview.destination,
      startDate: state.overview.startDate,
      endDate: state.overview.endDate,
      complete: state.overview.complete
    }
  )
}

module.exports = connect(mapState, {updateOverview})(Overview);
