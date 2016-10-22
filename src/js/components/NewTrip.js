import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import moment from 'moment'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { addOverview } from '../actions/actionCreators'
import 'react-widgets/lib/less/react-widgets.less'

momentLocalizer(moment)

const validate = values => {
  const errors = {}
  if (!values.destination) {
    errors.username = 'Field is required'
  }
  if (!values.startDate) {
    errors.startDate = 'Field is required'
  }
  if (!values.endDate) {
    errors.endDate = 'Field is required'
  }
  return errors
}

const renderInput = ({ input, meta: { touched, error}, style, placeholder}) => {
  return (
    <div>
      <input {...input} style={style} placeholder={placeholder}/>
      {error && touched && <span>{error}</span>}
    </div>
  )
}

const renderDatePicker= ({ input, placeholder }) => {
  return (
    <div style={{width: '17em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
      <DateTimePicker
        {...input}
        time={false}
        placeholder={placeholder}
        value = {input.value !== '' ? new Date(input.value) : null}
        onChange = {(event, value) => {input.onChange(value)}}
      />
    </div>
  )
}

let NewTrip = ({ handleSubmit, dispatch }) => {
  return (
    <div style={{position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}>
      <h1>Where are you headed?</h1>
      <form
        onSubmit={ handleSubmit(values => {
          dispatch(addOverview(values, true)) })
        }
      >
        <Field name='destination' component={renderInput}
          placeholder='Destination'
          style={{width: '15em', height: '24px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #cccccc', padding: '7px 14px', fontSize: '16px', backgroundImage: 'none'}}
        />
        <Field name='startDate' component={renderDatePicker} placeholder='Start date'/>
        <Field name='endDate' component={renderDatePicker} placeholder='End date' />
        <button type='submit'
          style={{marginTop: '10px', backgroundColor: '#4b6db8', color: '#fafafa', borderStyle: 'none', borderRadius: '4px', padding: '12px 40px', fontSize: '20px', cursor: 'pointer'}}
        >
          Get Going
        </button>
      </form>
    </div>
  )
}

function mapState(state) {
  return { complete: state.overview.complete }
}

NewTrip = reduxForm({
  form: 'overview',
  destroyOnUnmount: false,
  validate
})(NewTrip)

module.exports = connect(mapState)(NewTrip)
