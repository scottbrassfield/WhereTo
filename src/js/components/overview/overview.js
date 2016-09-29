const React = require('react');
import { reduxForm, Field }from 'redux-form';
const { connect } = require('react-redux');

const renderInput = ({input, placeholder, type}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  )
}

let Overview = ({ handleSubmit }) => {
  return (
    <div>
    <h1>Where are you Headed?</h1>
      <form onSubmit={ handleSubmit }>
        <Field name='destination' type='text' component={renderInput} placeholder='Destination' />
        <Field name='startDate' type='text' component={renderInput} placeholder='Start date'/>
        <Field name='endDate' type='text' component={renderInput} placeholder='End date' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const form = reduxForm({
  form: 'overview',
  onSubmit (values) {
    console.log(values)
  }
})

module.exports = connect()(form(Overview))
