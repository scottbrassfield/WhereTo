import React from 'react'
import ConnectedCalendar from '../../containers/ConnectedCalendar'

import PlanInput from './PlanInput'

const Header = () => {
  return (
    <div>
      <ConnectedCalendar />
      <div style={{display: 'inline-block', width: '70%', verticalAlign: 'top', paddingTop: '10px'}}>
        <PlanInput />
      </div>
    </div>
  )
}

module.exports = Header;
