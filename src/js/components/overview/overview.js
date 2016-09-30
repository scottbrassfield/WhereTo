import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
require('../../../stylesheets/components/overview.scss')

const renderTextField = ({ input, label }) => {
  return (
    <div>
      <TextField {...input} hintText={label} />
    </div>
  )
}

let Overview = ({ handleSubmit }) => {
  return (
    <div>
      <h1>Where are you Headed?</h1>
      <form id='overview' onSubmit={ handleSubmit }>
        <Field name='destination' component={renderTextField} label='Destination' />
        <Field name='startDate' component={renderTextField} label='Start date' />
        <Field name='endDate' component={renderTextField} label='End date' />
        <RaisedButton type='submit' label='Submit' />
      </form>
    </div>
  )
}

const form = reduxForm({
  form: 'overview',
  fields: ['destination', 'startDate', 'endDate'],
  onSubmit: ({ destination, startDate, endDate }, dispatch) => {
    dispatch({
      type: 'ADD_OVERVIEW',
      dest: destination,
      start: startDate,
      end: endDate
    })
  }
})

module.exports = (form(Overview))
