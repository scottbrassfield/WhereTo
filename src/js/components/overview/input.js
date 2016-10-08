import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { addOverview } from '../../actions/action-creators'
// import { normalizeDates } from '../normalizeForms'
import '../../../stylesheets/components/overview.scss'

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
        <RaisedButton type='submit' label='Submit' primary={true} style={{marginTop: '20px'}}/>
      </form>
    </div>
  )
}

function mapState(state) {
  return { complete: state.overview.complete }
}

Input = reduxForm({
  form: 'overview',
  fields: ['destination', 'startDate', 'endDate'],
  onSubmit: (values, dispatch) => {
    dispatch(addOverview(values, true))
  }
})(Input)

module.exports = connect(mapState)(Input)
