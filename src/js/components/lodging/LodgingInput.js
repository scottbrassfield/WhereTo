import React from 'react'
import { reduxForm, Field }from 'redux-form'
import moment from 'moment'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { RaisedButton } from 'material-ui/'
import { addLodging, showForm } from '../../actions/actionCreators'
import '../../../stylesheets/config/config.scss'
import 'react-widgets/lib/less/react-widgets.less'

momentLocalizer(moment)

const renderInput = ({ input, label, style }) => {
  return (
    <div style={{width: '17em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
      <input {...input} placeholder={label} style={style} />
    </div>
  )
}

const renderDatePicker= ({ input, label }) => {
  return (
    <div style={{width: '17em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
      <DateTimePicker
        {...input}
        time={false}
        placeholder={label}
        value = {input.value !== '' ? new Date(input.value) : null}
        onChange = {(event, value) => {input.onChange(value)}}
      />
    </div>
  )
}

let LodgingInput = ({ handleSubmit, formVisible, dispatch }) => {
  if (formVisible) {
    return (
      <div className='toggle-form'>
        <form
          onSubmit={ handleSubmit }
        >
          <Field name='lodging' component={renderInput}
            label='Where are you staying?'
            style={{width: '100%', borderRadius: '4px', border: '1px solid #cccccc', padding: '6px 14px', fontSize: '16px' }}
          />
          <Field name='startDate' component={renderDatePicker}
            label='Start Date'
          />
          <Field name='endDate' component={renderDatePicker}
            label='End Date'
          />
          <div style={{marginTop: '15px'}}>
            <RaisedButton type='submit' label='Add'
              style={{minWidth: '40px', marginRight: '8px'}} labelStyle={{fontSize: '10px', }}
            />
            <RaisedButton type='button' label='Cancel'
              style={{minWidth: '40px'}} labelStyle={{fontSize: '10px'}}
              onClick={() => dispatch(showForm('lodging', false))}
            />
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
  enableReinitialize: true,
  onSubmit: (values, dispatch, { tripDates, reset }) => {
    let { startDate, endDate } = values
    let newValues = {
      ...values,
      startDate: moment(startDate, 'MM/D/YYYY'),
      endDate: moment(endDate, 'MM/D/YYYY')
    }
    dispatch(addLodging(newValues, tripDates))
    dispatch(showForm('lodging', false))
    reset()
  }
})(LodgingInput)
