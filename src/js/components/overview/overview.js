import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
require('../../../stylesheets/components/overview.scss')

const renderTextField = ({ input, label }) => {
  return (
    <div>
      <TextField {...input} hintText={label} />
    </div>
  )
}

let Overview = ({overview, handleSubmit }) => {
  var status = 'active';
  if (overview) {
    status = 'hidden'
  }
  return (
    <div id="overview" className={ status }>
      <h1>Where are you headed?</h1>
      <form onSubmit={ handleSubmit }>
        <Field name='destination' component={renderTextField} label='Destination' />
        <Field name='startDate' component={renderTextField} label='Start date' />
        <Field name='endDate' component={renderTextField} label='End date' />
        <RaisedButton type='submit' label='Submit' />
      </form>
    </div>
  )
}

function mapState(state) {
  return { overview: state.itinerary.overview }
}

Overview = reduxForm({
  form: 'overviewForm',
  fields: ['destination', 'startDate', 'endDate'],
  onSubmit: ({ destination, startDate, endDate }, dispatch) => {
    dispatch({
      type: 'OVERVIEW',
      dest: destination,
      start: startDate,
      end: endDate,
      complete: true,
    })
  }
})(Overview)

module.exports = connect(mapState)(Overview)
