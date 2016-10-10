import React from 'react'
import { reduxForm, Field }from 'redux-form'
import { Card, TextField, RaisedButton } from 'material-ui/'
import '../../../stylesheets/components/itinerary.scss'

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let Lodging = ({ complete, lodging, id, dayId, onButtonClick, onFormSubmit, reset, handleSubmit, dispatch }) => {
  if (!complete) {
    return (
      <div>
        <form
          onSubmit={ handleSubmit((values) => onFormSubmit(values, dispatch, dayId, reset)) }>
          <Field name='lodging' component={renderTextField}
            label='Where are you staying?'
            style={{ display: 'inline-block', marginRight: '10px', width: '57%', fontSize: '12px' }}/>
          <Field name='nights' component={renderTextField}
            label='How many nights?'
            style={{ display: 'inline-block', marginRight: '10px', width: '25%', fontSize: '12px' }} />
          <RaisedButton type='submit' label='Add'
            style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
        </form>
      </div>
    )
  } else {
    return (
      <Card style={{marginTop: '5px', padding: '15px', position: 'relative'}}>
        <div style={{marginRight: '10px', display: 'inline-block'}}>
          Lodging:
        </div>
        <div style={{display: 'inline-block'}}>
          {lodging}
        </div>
        <RaisedButton
          style={{position: 'absolute', right: '12px', top: '7px', minWidth: '20px', lineHeight: '30px'}} type='button' label='Update'
          labelStyle={{fontSize: '10px'}}
          onClick={() => onButtonClick(id)}
        />
      </Card>
    )
  }
}

export default reduxForm({
  form: 'lodging',
  enableReinitialize: true
})(Lodging)
