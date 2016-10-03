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

let Input = ({ complete, handleSubmit }) => {

  var inputClass = classNames({
    'hidden': complete,
    'active': !complete
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
  return { complete: state.overview.complete }
}

Input = reduxForm({
  form: 'overviewForm',
  onSubmit: ({ destination, startDate, endDate }, dispatch) => {
    dispatch({
      type: 'ADD_OVERVIEW',
      destination,
      startDate,
      endDate,
      complete: true,
    })
  }
})(Input)

module.exports = connect(mapState)(Input)
