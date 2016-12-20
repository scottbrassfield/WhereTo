import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Modal from './Modal'
import { showModal, userLogin } from '../actions/actionCreators'
import { emptyValidate } from './util'

const validate = values => {
  const fields = ['username', 'password']
  const errors = emptyValidate(values, fields)
  return errors
}

const renderInput = ({ label, type, input, meta: { error, touched } }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        {...input}
        type={type}
        onChange={(event) => {
          input.onChange(event.target.value)
        }}
      />
      {touched && error && <div style={{color: 'darkred'}}>{error}</div>}
    </FormGroup>
  )
}

let Login = ({ handleSubmit, modal, dispatch }) => {

  return (
    <Modal
      general={{
        show: modal === 'login',
        keyboard: true,
        onHide: () => { dispatch(showModal(null)) }
      }}
      header={{ closeButton: true }}
      title='Enter your login information'
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
    </Modal>
  )
}

Login = reduxForm({
  form: 'login',
  validate,
  onSubmit: (values, dispatch) => {
    dispatch(userLogin(values))
  }
})(Login)

export default connect()(Login)
