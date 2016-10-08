import React from 'react'
import classNames from 'classnames'
import { Card, RaisedButton } from 'material-ui'
import '../../../stylesheets/components/itinerary.scss'

const LodgingSummary = ({ lodging, dayId, onButtonClick }) => {

  let summaryClass = classNames({
    'hidden': !lodging,
  })

  return (
    <Card className={summaryClass} style={{marginTop: '5px', padding: '15px', position: 'relative'}}>
      <div
        style={{marginRight: '10px', display: 'inline-block'}}>
        Lodging:
      </div>
      <div
        style={{display: 'inline-block'}}>
        {lodging}
      </div>
      <RaisedButton
        style={{position: 'absolute', right: '30px', top: '7px', minWidth: '20px', lineHeight: '30px'}} type='button' label='Update'
        labelStyle={{fontSize: '10px'}}
        onClick={() => onButtonClick(dayId)}
      />
    </Card>
  )
}

export default LodgingSummary
