import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import Moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { addPlan, showForm } from '../../actions/actionCreators'
import '../../../stylesheets/config/config.scss'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(Moment)

const renderInput = ({ input, meta: { touched, error}, style, placeholder}) => {
  return (
    <div>
      <input {...input} style={style} placeholder={placeholder}/>
      {error && touched && <span>{error}</span>}
    </div>
  )
}

const renderTimePicker = ({ input, placeholder }) => {
  return (
    <div
      style={{display: 'inline-block', marginRight: '10px', width: '45%'}}
    >
      <DateTimePicker
        {...input}
        calendar={false}
        placeholder={placeholder}
        value = {input.value !== '' ? new Date(input.value) : null}
        onChange = {(event, value) => { input.onChange(value)}}
      />
    </div>
  )
}

let PlanInput = ({ handleSubmit, formVisible, dispatch }) => {
  if (formVisible) {
    return (
      <div className='toggle-form'>
        <form
          onSubmit={ handleSubmit }>
          <Field name='plan' component={renderInput}
            placeholder='Description of plans'
            style={{ marginRight: '10px', width: '90%', height: '25px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #cccccc', padding: '7px 13px', fontSize: '16px'}} />
          <Field name='startTime' component={renderTimePicker} placeholder='Start Time'/>
          <Field name='endTime' component={renderTimePicker} placeholder='End Time'/>
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
  onSubmit: (values, dispatch, { dayId, reset }) => {
    dispatch(addPlan(values, dayId))
    dispatch(showForm('plans', false))
    reset()
  }
})(PlanInput)

const getDayId = ({entities: { days }, currentDay}) => {
  return days.byId ? currentDay : ''
}

const mapState = (state) => {
  return {
    dayId: getDayId(state)
  }
}

PlanInput = connect(mapState)(PlanInput)

export default PlanInput;
