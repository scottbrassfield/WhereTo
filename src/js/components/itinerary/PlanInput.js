import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import Moment from 'moment'
import RaisedButton from 'material-ui/RaisedButton'
import { addPlan, showForm } from '../../actions/actionCreators'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

import momentLocalizer from 'react-widgets/lib/localizers/moment'
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
    <DateTimePicker
    {...input}
    calendar={false}
    placeholder={placeholder}
    value = {input.value !== '' ? new Date(input.value) : null}
    onChange = {(event, value) => { input.onChange(value)}}
    style={{width: '8em'}}
    />
  )
}

let PlanInput = ({ handleSubmit, formVisible, dispatch }) => {
    if (formVisible) {
      return (
        <div className='toggle-form'>
          <form
            onSubmit={ handleSubmit }>
            <Field name='plan' component={renderInput}
              label='What do you want to do?'
              style={{ marginRight: '10px', width: '98%'}} />
            <Field name='startTime' component={renderTimePicker}
              label='Start Date'
              style={{ display: 'inline-block', marginRight: '10px', marginTop: '20px', width: '45%'}} />
            <Field name='endTime' component={renderTimePicker}
              label='End Date'
              style={{ display: 'inline-block', marginRight: '10px', width: '45%'}} />
            <div style={{marginTop: '15px'}}>
              <RaisedButton type='submit' label='Add'
                style={{minWidth: '40px', marginRight: '8px'}} labelStyle={{fontSize: '10px', }} />
              <RaisedButton type='button' label='Cancel'
                style={{minWidth: '40px'}} labelStyle={{fontSize: '10px'}}
                onClick={() => dispatch(showForm('plan', false))} />
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
  form: 'plan',
  onSubmit: (values, dispatch, { dayId, reset }) => {
    dispatch(addPlan(values, dayId))
    dispatch(showForm('plan', false))
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
