import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import classNames from 'classnames';
require('../../../stylesheets/components/overview.scss');

const renderTextField = ({ input, label }) => {
  return (
    <div>
      <TextField {...input} hintText={label} />
    </div>
  )
}

let Input = ({overview, handleSubmit }) => {

  var inputClass = classNames({
    'hidden': overview,
    'active': !overview
  })

  return (
    <div id="input" className={ inputClass }>
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

Input = reduxForm({
  form: 'overviewForm',
  fields: ['destination', 'startDate', 'endDate'],
  onSubmit: ({ destination, startDate, endDate }, dispatch) => {
    dispatch({
      type: 'ADD_OVERVIEW',
      dest: destination,
      start: startDate,
      end: endDate,
      complete: true,
    })
  }
})(Input)

module.exports = connect(mapState)(Input)
