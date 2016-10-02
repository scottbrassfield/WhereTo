import React from 'react';
import { connect } from 'react-redux';

const Calendar = ({ date }) => {
  return (
    <div style={{width: '20%', marginLeft: '5px', marginTop: '5px'}}>
      <div style={{textAlign: 'center', height: '50px', fontSize: '30px', paddingTop: '10px', color: 'maroon'}}>
        { date }
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
  return {date: state.itinerary.currentDate}
}

module.exports = connect(mapState)(Calendar);
