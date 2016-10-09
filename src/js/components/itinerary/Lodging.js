import React from 'react'
import { reduxForm, Field }from 'redux-form'
import { Card, TextField, RaisedButton } from 'material-ui/'
import { addLodging } from '../../actions/actionCreators'
import '../../../stylesheets/components/itinerary.scss'

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let Lodging = ({ handleSubmit, lodging, dayId, onButtonClick, initialize }) => {
  if (!lodging) {
    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <Field name='lodging' component={renderTextField} label='Where are you staying?'
            style={{ display: 'inline-block', marginRight: '10px', width: '57%', fontSize: '12px' }}/>
          <Field name='nights' component={renderTextField} label='How many nights?'
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
          onClick={() => onButtonClick(dayId, initialize, lodging)}
        />
      </Card>
    )
  }
}

export default reduxForm({
  form: 'lodging',
  onSubmit: (values, dispatch, { dayId, reset}) => {
    dispatch(addLodging(values, dayId))
    reset()
  }
})(Lodging)
