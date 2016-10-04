import React from 'react';
import { reduxForm, Field }from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
require('../../../stylesheets/components/itinerary.scss');

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let LodgingInput = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <Field name='lodging' component={renderTextField} label='Where are you staying?'
          style={{ display: 'inline-block', marginRight: '10px', width: '60%', fontSize: '12px' }}/>
        <Field name='nights' component={renderTextField} label='How many nights?'
          style={{ display: 'inline-block', marginRight: '10px', width: '20%', fontSize: '12px' }} />
        <RaisedButton type='submit' label='Add'
          style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
      </form>
    </div>
  )
}

LodgingInput = reduxForm({
  form: 'lodging',
  onSubmit: ({ lodging, nights, dayId }, dispatch) => {
    dispatch({
      type: 'ADD_LODGING',
      id: dayId,
      lodging,
      nights
    })
  }
})(LodgingInput)

const LodgingSummary = ({hotel}) => {
  return (
    <div>
      <span style={{marginRight: '10px'}}>Staying:</span>
      <span>{ hotel }</span>
    </div>
  )
}

const getDayId = ({entities: { days }, currentDay}) => {
  return days.byId ? currentDay : ''
}

const mapState = (state) => {
  return { dayId: getDayId(state) }
}

const Lodging = () => {
  return (
    <div>
      <LodgingInput />
      <LodgingSummary />
    </div>
  )
}

module.exports = connect(mapState)(Lodging)
