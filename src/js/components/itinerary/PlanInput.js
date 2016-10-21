import React from 'react'
import { reduxForm, Field }from 'redux-form'
import moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { addPlan, showForm } from '../../actions/actionCreators'
import '../../../stylesheets/config/config.scss'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

const renderInput = ({ input, meta: { touched, error}, style, placeholder}) => {
  return (
    <div>
      <input {...input} style={style} placeholder={placeholder}/>
      {error && touched && <span>{error}</span>}
    </div>
  )
}

const renderTimePicker = ({ input, placeholder, currentDate }) => {
  return (
    <div
      style={{display: 'inline-block', marginRight: '10px', width: '45%'}}
    >
      <DateTimePicker
        {...input}
        calendar={false}
        placeholder={placeholder}
        value = {valueToTime(input.value, currentDate)
        }
        onChange = {(event, value) => { input.onChange(value)}}
        onBlur = {(event, value) => { input.onBlur(value)}}
      />
    </div>
  )
}

let PlanInput = ({ handleSubmit, formVisible, dispatch, currentDate }) => {
  if (formVisible) {
    return (
      <div className='toggle-form'>
        <form
          onSubmit={ handleSubmit }>
          <Field name='plan' component={renderInput}
            placeholder='Description of plans'
            style={{ marginRight: '10px', width: '90%', height: '25px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #cccccc', padding: '7px 13px', fontSize: '16px'}} />
          <Field name='startTime' component={renderTimePicker} placeholder='Start Time' currentDate={currentDate} />
          <Field name='endTime' component={renderTimePicker} placeholder='End Time'currentDate={currentDate} />
          <div style={{marginTop: '15px'}}>
            <RaisedButton type='submit' label='Add'
              style={{minWidth: '40px', marginRight: '8px'}} labelStyle={{fontSize: '10px', }} />
            <RaisedButton type='button' label='Cancel'
              style={{minWidth: '40px'}} labelStyle={{fontSize: '10px'}}
              onClick={() => dispatch(showForm('plans', false))} />
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

PlanInput = reduxForm({
  form: 'plans',
  destroyOnUnmount: true,
  onSubmit: (values, dispatch, { currentDay, reset, currentDate }) => {
    let { startTime, endTime } = values
    let newValues = {
      ...values,
      startTime: valueToTime(startTime, currentDate),
      endTime: valueToTime(endTime, currentDate)
    }
    dispatch(addPlan(newValues, currentDay))
    dispatch(showForm('plans', false))
    reset()
  },

})(PlanInput)

export default PlanInput;

function valueToTime (value, currentDate) {
  if (value === '') {
    return null
  } else {
    let div = value.indexOf(':')
    let hour = parseInt(value.slice(0, div))
    let min = parseInt(value.slice(div + 1, div + 3))

    let tod = value.slice(-2)

    if (tod === 'PM') {
      hour = hour < 12 ? hour + 12 : 12
    } else {
      hour = hour < 12 ? hour : 0
    }

    return moment(currentDate, 'MM/DD/YYYY')
      .hour(hour).minute(min).toDate()
  }
}
