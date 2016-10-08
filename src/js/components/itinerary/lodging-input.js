import React from 'react'
import { reduxForm, Field }from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { addLodging } from '../../actions/action-creators'
import classNames from 'classnames'
import '../../../stylesheets/components/itinerary.scss'

const validate = values => {
  const errors = {}
  if (!values.lodging) {
    errors.lodging = 'Please enter lodging information'
  }
  return errors
}

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}


let LodgingInput = ({ handleSubmit, lodging }) => {

  let inputClass = classNames({
    'hidden': lodging,
    'active': !lodging
  })

  return (
    <div className={inputClass}>
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
}

LodgingInput = reduxForm({
  form: 'lodging',
  onSubmit: (values, dispatch, { dayId }) => {
    dispatch(addLodging(values, dayId))
  },
  validate
})(LodgingInput)

export default LodgingInput
