import React from 'react';
import { connect } from 'react-redux';


const Calendar = ({ date, dispatch }) => {

  const onRightClick = (dispatch) => {
    dispatch({
      type: 'NEXT_DAY'
    })
  }

  const onLeftClick = (dispatch) => {
    dispatch({
      type: 'PREVIOUS_DAY'
    })
  }

  return (
    <div style={{width: '20%', marginLeft: '5px', marginTop: '5px', marginRight: '30px', display: 'inline-block'}}>
      <div style={{textAlign: 'center', height: '60px', fontSize: '30px', paddingTop: '10px', color: 'maroon'}}>
        <div>{date}</div>
      </div>
      <div style={{width: '100%', textAlign: 'center', paddingBottom: '5px'}}>
        <button onClick={() => onLeftClick(dispatch)}><i className="material-icons md-14">keyboard_arrow_left</i></button>
        <button><i className="material-icons md-14">date_range</i></button>
        <button onClick={() => onRightClick(dispatch)}><i className="material-icons md-14">keyboard_arrow_right</i></button>
      </div>
    </div>
  )
}

const getDate = ({entities: { days: { byId } }, currentDay}) => {
  return byId[currentDay] ? byId[currentDay].date.format('MMM D') : ''
}

const mapState = (state) => {
  return {date: getDate(state)}
}

module.exports = connect(mapState)(Calendar);
