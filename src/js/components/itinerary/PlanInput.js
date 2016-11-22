import React from 'react'
import { reduxForm, Field }from 'redux-form'
import moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { valueToTime } from '../util'
import { addPlan, showForm } from '../../actions/actionCreators'
import '../../../stylesheets/config/config.scss'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

const renderInput = ({ input, meta: { touched, error}, style, placeholder}) => {
  return (
    <div style={{width: '17em', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px'}}>
      <input {...input} style={style} placeholder={placeholder}/>
      {error && touched && <span>{error}</span>}
    </div>
  )
}

const renderTimePicker = ({ input, placeholder, currentDate }) => {
  return (
    <div
      style={{display: 'inline-block', width: '45%', marginLeft: '1px', marginRight: '1px'}}
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
            style={{width: '100%', borderRadius: '4px', border: '1px solid #cccccc', padding: '6px 14px', fontSize: '16px' }} />
          <div style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <Field name='startTime' component={renderTimePicker} placeholder='Start Time' currentDate={currentDate} />
            <Field name='endTime' component={renderTimePicker} placeholder='End Time'currentDate={currentDate} />
          </div>
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
    dispatch(addPlan(newValues, currentDay)).then(() => {
      dispatch(showForm('plans', false))
      reset()
    })
  },

})(PlanInput)

export default PlanInput;
