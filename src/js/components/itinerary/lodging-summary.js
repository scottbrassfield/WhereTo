import React from 'react'
import { Card, RaisedButton } from 'material-ui'
import classNames from 'classnames'
import '../../../stylesheets/components/itinerary.scss'


const LodgingSummary = ({ lodging, dayId, onButtonClick }) => {

  let summaryClass = classNames({
    'hidden': !lodging,
  })

  return (
    <Card className={summaryClass} style={{marginTop: '15px', padding: '20px', position: 'relative'}}>
      <div
        style={{marginRight: '10px', display: 'inline-block'}}>
        Lodging:
      </div>
      <div
        style={{display: 'inline-block'}}>
        {lodging}
      </div>
      <RaisedButton
        style={{position: 'absolute', right: '20px', top: '12px', minWidth: '20px', lineHeight: '30px'}} type='button' label='Update'
        labelStyle={{fontSize: '10px'}}
        onClick={() => onButtonClick(dayId)}
      />
    </Card>
  )
}

export default LodgingSummary

//
