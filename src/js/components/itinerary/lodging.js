import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
require('../../../stylesheets/components/itinerary.scss');

const renderTextField = ({ input, label, style }) => {
  return (
    <div style={{ display: 'inline-block', width: '35%', marginRight: '10px' }}>
      <TextField {...input} hintText={label} style={style} />
    </div>
  )
}

let LodgingInput = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <Field name='lodging' component={renderTextField} label='Where are you staying?'
          style={{display: 'inline-block', width: '100%', fontSize: '12px', marginRight: '10px'}}/>
        <Field name='nights' component={renderTextField} label='For how many nights?'
          style={{display: 'inline-block', width: '100%', fontSize: '12px'}} />
        <RaisedButton type='submit' label='Add'
          style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
      </form>
    </div>
  )
}

LodgingInput = reduxForm({
  form: 'lodging',
  onSubmit: ({ lodging, nights }, dispatch) => {
    dispatch({
      type: 'ADD_LODGING',
      lodging,
      nights
    })
  }
})(LodgingInput)
//
// const LodgingSummary = () => {
//   return (
//     <div>
//     </div>
//   )
// }

const Lodging = () => {
  return (
    <div>
      <LodgingInput />
    </div>
  )
}

// const mapState = (state) => state.itinerary.days

module.exports = Lodging
