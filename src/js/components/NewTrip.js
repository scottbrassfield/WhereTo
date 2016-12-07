import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import moment from 'moment'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { getPlace } from '../actions/actionCreators'
// import PlacesResults from '../containers/PlacesResults'
import 'react-widgets/lib/less/react-widgets.less'
import { emptyValidate } from './util'

momentLocalizer(moment)

const validate = values => {
  const fields = ['destination', 'startDate', 'endDate']
  const errors = emptyValidate(values, fields)
  return errors
}


const renderInput = ({ input, meta: { touched, error}, style, placeholder}) => {
  return (
    <div style={{width: '17em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
      <input {...input} style={style} placeholder={placeholder}/>
      {touched && error && <span>{error}</span>}
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

let NewTrip = ({ handleSubmit }) => {
  return (
    <div
      style={{position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}
    >
      <h1>Where are you going?</h1>
      <form onSubmit={handleSubmit}>
        <Field name='destination' component={renderInput}
          placeholder='Destination'
          style={{width: '100%', border: '1px solid #cccccc', borderRadius: '4px', padding: '6px 14px', fontSize: '16px' }}
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

const mapState = (state) => {
  return {
    complete: state.overview.complete,
    results: state.modal.modalType === 'results'
  }
}

NewTrip = reduxForm({
  form: 'overview',
  destroyOnUnmount: false,
  validate,
  onSubmit: (values, dispatch) => {
    dispatch(getPlace(values.destination))
  }
})(NewTrip)

module.exports = connect(mapState)(NewTrip)
