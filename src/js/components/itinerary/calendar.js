import React from 'react';

const Calendar = ({ totalDays, currentDay, nextDay, priorDay }) => {

  return (
    <div
      style={{width: '20%', marginLeft: '5px', marginTop: '5px', marginRight: '30px', display: 'inline-block'}}
    >
      <div
        style={{textAlign: 'center', height: '60px', fontSize: '30px', paddingTop: '10px', color: 'maroon'}}
      >
        <div>{currentDay}</div>
      </div>
      <div
        style={{width: '100%', textAlign: 'center', paddingBottom: '5px'}}
      >
        <button onClick={priorDay}>
          <i className="material-icons md-14">keyboard_arrow_left</i>
        </button>
        <button>
          <i className="material-icons md-14">date_range</i>
        </button>
        <button onClick={() => nextDay(totalDays)}>
          <i className="material-icons md-14">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  )
}

export default Calendar
