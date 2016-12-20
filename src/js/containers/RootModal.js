import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Results from '../containers/PlacesResults'

const modals = {
  'login': Login,
  'results': Results,
  'signup': Signup
}

const RootModal = ({ modal }) => {
  if (!modal) {
    return null
  }
  const CurrentModal = modals[modal]
  return <CurrentModal modal={modal}/>
}

export default connect()(RootModal)
