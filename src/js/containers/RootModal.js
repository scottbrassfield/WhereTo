import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Results from '../containers/PlacesResults'

const modals = {
  'login': Login,
  'results': Results
}

const RootModal = ({ modal }) => {
  if (!modal) {
    return null
  }
  const CurrentModal = modals[modal]
  return <CurrentModal modal={modal}/>
}

const mapState = (state) => {
  return { modal: state.modal.modalType }
}

export default connect(mapState)(RootModal)
