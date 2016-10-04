import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const Calendar = ({ day }) => {
  return (
    <div style={{width: '20%', marginLeft: '5px', marginTop: '5px', marginRight: '50px', display: 'inline-block'}}>
      <div style={{textAlign: 'center', height: '60px', fontSize: '30px', paddingTop: '10px', color: 'maroon'}}>
        <div>{day.dateString}</div>
      </div>
      <div style={{width: '100%', textAlign: 'center', paddingBottom: '5px'}}>
        <button><i className="material-icons md-14">keyboard_arrow_left</i></button>
        <button><i className="material-icons md-14">date_range</i></button>
        <button><i className="material-icons md-14">keyboard_arrow_right</i></button>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return { day: state.entities.days.currentDay}
}

module.exports = connect(mapState)(Calendar);
