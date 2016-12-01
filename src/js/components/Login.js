import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import ModalWrapper from './Modal'
import { showModal } from '../actions/actionCreators'


let Login = ({ handleSubmit, modal, dispatch }) => {

  const renderInput = ({ label, type }) => {
    return (
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={type}/>
      </FormGroup>
    )
  }

  return (
    <ModalWrapper
      title='Enter your login information'
      show={modal === 'login'}
      keyboard={true}
      closeButton={true}
      onHide={() => { dispatch(showModal(null)) }}
    >
      <form onSubmit={handleSubmit}>
        <Field
          name='username'
          type='text'
          component={renderInput}
          label='Username'
        />
        <Field
          name='password'
          type='text'
          component={renderInput}
          label='Password'
        />
        <Button bsStyle='primary' type='submit'>Submit</Button>
      </form>
    </ModalWrapper>
  )
}

Login = reduxForm({
  form: 'login',
  onSubmit: (values, dispatch) => {
    dispatch(showModal(null))
  }
})(Login)

export default connect()(Login)
