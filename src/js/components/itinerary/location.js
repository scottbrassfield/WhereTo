import React from 'react';
import { reduxForm, Field }from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { connect } from 'react-redux';
require('../../../stylesheets/components/itinerary.scss');

const renderTextField = ({ input, label, style }) => {
  return (
    <div style={{display: 'inline-block', width: '72%', marginRight: '10px'}}>
      <TextField {...input} hintText={label} style={style} />
    </div>
  )
}

let LocationInput = ({ handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit } style={{width: '100%'}}>
      <Field name='lodging' className='inline' component={renderTextField} label='Cities / Neighborhoods you are visiting?'
        style={{display: 'inline-block', width: '100%', fontSize: '12px', marginRight: '10px'}}/>
      <RaisedButton type='submit' label='Add'
        style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
    </form>
  )
}

LocationInput = reduxForm({
  form: 'location',
  onSubmit: ({ locations }, dispatch) => {
    dispatch({
      type: 'ADD_LOCATION',
      locations
    })
  }
})(LocationInput)
//
// const LocationSummary = () => {
//   return (
//     <div>
//     </div>
//   )
// }

const Location = () => {
  return (
    <div style={{width: '100%', marginBottom: '10px'}}>
      <LocationInput />
    </div>
  )
}

module.exports = Location
