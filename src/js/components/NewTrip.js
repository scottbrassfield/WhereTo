import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field }from 'redux-form'
import { RaisedButton, TextField } from 'material-ui'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { addOverview } from '../actions/actionCreators'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import '../../stylesheets/components/overview.scss'
import 'react-widgets/dist/css/react-widgets.css'


momentLocalizer(Moment)

const renderTextField = ({ input, label }) => {
  return (
    <div>
      <TextField {...input} hintText={label} />
    </div>
  )
}

const renderDatePicker= ({ input, time, label}) => {
  return (
    <div>
      <DateTimePicker
      time={time}
      placeholder={label}
      {...input}
      value= {input.value !== '' ? new Date(input.value) : null}
      onChange = {(event, value) => {
        input.onChange(value)}
      }
       />
    </div>
  )
}

let NewTrip = ({ handleSubmit, dispatch }) => {
  return (
    <div id="input">
      <h1>Where are you headed?</h1>
      <form onSubmit={ handleSubmit(values => {
          dispatch(addOverview(values, true)) })
        }
      >
        <Field name='destination' component={renderTextField} label='Destination' />
        <Field name='startDate' component={renderDatePicker} label='Start date' time={false} />
        <Field name='endDate' component={renderDatePicker} label='End date' time={false} />
        <RaisedButton type='submit' label='Submit' primary={true} style={{marginTop: '20px'}}/>
      </form>
    </div>
  )
}

function mapState(state) {
  return { complete: state.overview.complete }
}

NewTrip = reduxForm({
  form: 'overview',
  fields: ['destination', 'startDate', 'endDate'],
  destroyOnUnmount: false
})(NewTrip)

module.exports = connect(mapState)(NewTrip)
