import React from 'react'
import Calendar from './calendar'
import LodgingInput from './lodging'

const Header = () => {
  return (
    <div>
      <Calendar />
      <div style={{display: 'inline-block', width: '70%', verticalAlign: 'top', paddingTop: '10px'}}>
        <LodgingInput />
      </div>
    </div>
  )
}

module.exports = Header;
