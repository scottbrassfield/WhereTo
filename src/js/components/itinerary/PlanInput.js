import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { addPlan } from '../../actions/actionCreators'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import '../../../stylesheets/components/itinerary.scss'
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(Moment)

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

const renderTimePicker = ({ input, calendar }) => {
  return (
    <DateTimePicker
    {...input}
    calendar={calendar}
    value = {input.value !== '' ? new Date(input.value) : null}
    onChange = {(event, value) => { input.onChange(value)}}
    />
  )
}

let PlanInput = ({ handleSubmit }) => {
  return (
    <div style={{marginTop: '20px'}}>
      <form onSubmit={ handleSubmit }>
        <Field name='plan' component={renderTextField} label='Add Plan'
          style={{ display: 'inline-block', marginRight: '10px', width: '50%', fontSize: '12px' }}/>
        <Field name='startTime' component={renderTimePicker}
          placeholder='Start Time'
          calendar={false}
          style={{ display: 'inline-block', marginRight: '10px', width: '15%', fontSize: '12px' }}/>
        <Field name='endTime' component={renderTimePicker}
          placeholder='End Time'
          calendar={false}
          style={{ display: 'inline-block', marginRight: '10px', width: '15%', fontSize: '12px' }} />
        <RaisedButton type='submit' label='Add'
          style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
      </form>
    </div>
  )
}

PlanInput = reduxForm({
  form: 'plan',
  onSubmit: (values, dispatch, { dayId, reset }) => {
    dispatch(addPlan(values, dayId))
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
