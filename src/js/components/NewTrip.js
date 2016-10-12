import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addOverview } from '../actions/actionCreators'
import '../../stylesheets/components/overview.scss'

const renderTextField = ({ input, label }) => {
  return (
    <div>
      <TextField {...input} hintText={label} />
    </div>
  )
}

let NewTrip = ({ handleSubmit, dispatch }) => {
  return (
    <div id="input">
      <h1>Where are you headed?</h1>
      <form onSubmit={ handleSubmit(values => {
          dispatch(addOverview(values, true)) })
        }
      >
        <Field name='destination' component={renderTextField} label='Destination' />
        <Field name='startDate' component={renderTextField} label='Start date' />
        <Field name='endDate' component={renderTextField} label='End date' />
        <RaisedButton type='submit' label='Submit' primary={true} style={{marginTop: '20px'}}/>
      </form>
    </div>
  )
}

function mapState(state) {
  return { complete: state.overview.complete }
}

NewTrip = reduxForm({
  form: 'overview',
  fields: ['destination', 'startDate', 'endDate'],
})(NewTrip)

module.exports = connect(mapState)(NewTrip)
