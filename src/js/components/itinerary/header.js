import React from 'react'
import Calendar from './calendar'
import Lodging from '../../containers/Lodging'
import PlanInput from './PlanInput'

const Header = () => {
  return (
    <div>
      <Calendar />
      <div style={{display: 'inline-block', width: '70%', verticalAlign: 'top', paddingTop: '10px'}}>
        <Lodging />
        <PlanInput />
      </div>
    </div>
  )
}

module.exports = Header;
