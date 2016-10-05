import React from 'react';
import { reduxForm, Field }from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addPlan } from '../../actions/action-creators';
import '../../../stylesheets/components/itinerary.scss';

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let PlanInput = ({ handleSubmit }) => {
  return (
    <div style={{marginTop: '20px'}}>
      <form onSubmit={ handleSubmit }>
        <Field name='plan' component={renderTextField} label='Add Plan'
          style={{ display: 'inline-block', marginRight: '10px', width: '50%', fontSize: '12px' }}/>
        <Field name='startTime' component={renderTextField}
          label='Start Time'
          style={{ display: 'inline-block', marginRight: '10px', width: '15%', fontSize: '12px' }}/>
        <Field name='endTime' component={renderTextField}
          label='End Time'
          style={{ display: 'inline-block', marginRight: '10px', width: '15%', fontSize: '12px' }} />
        <RaisedButton type='submit' label='Add'
          style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
      </form>
    </div>
  )
}

PlanInput = reduxForm({
  form: 'plan',
  onSubmit: (values, dispatch, { dayId }) => {
    dispatch(addPlan(values, dayId))
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
