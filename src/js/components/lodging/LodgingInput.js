import React from 'react'
import { reduxForm, Field }from 'redux-form'
import { TextField, RaisedButton } from 'material-ui/'
import '../../../stylesheets/components/lodging.scss'

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let LodgingInput = ({ onFormSubmit, reset, handleSubmit, dispatch, showForm, formVisible, tripDates }) => {
  if (formVisible) {
    return (
      <div className='lodging-form'>
        <form
          onSubmit={ handleSubmit((values) => onFormSubmit(values, dispatch, tripDates, reset)) }>
          <Field name='lodging' component={renderTextField}
            label='Where are you staying?'
            style={{ marginRight: '10px', width: '98%'}} />
          <Field name='startDate' component={renderTextField}
            label='Start Date'
            style={{ display: 'inline-block', marginRight: '10px', marginTop: '20px', width: '45%'}} />
          <Field name='endDate' component={renderTextField}
            label='End Date'
            style={{ display: 'inline-block', marginRight: '10px', width: '45%'}} />
          <div style={{marginTop: '15px'}}>
            <RaisedButton type='submit' label='Add'
              style={{minWidth: '40px', marginRight: '8px'}} labelStyle={{fontSize: '10px', }} />
            <RaisedButton type='button' label='Cancel'
              style={{minWidth: '40px'}} labelStyle={{fontSize: '10px'}}
              onClick={() => showForm('lodging', false)} />
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default reduxForm({
  form: 'lodging',
  enableReinitialize: true
})(LodgingInput)
