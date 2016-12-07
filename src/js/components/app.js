import React from 'react'
import { connect } from 'react-redux'
import RootModal from '../containers/RootModal'
import { showModal } from '../actions/actionCreators'

const App = ({modal, children, dispatch}) => {
  const styles = {
    nav: {
      position: 'fixed', top: 0, left: 0,
      height: 50,
      width: '100%',
      backgroundColor: 'rgb(50,50,50)'
    },
    navUser: {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)'
    },
    navUserItem: {
      marginRight: 20,
      display: 'inline-block',
      fontSize: 20,
      border: 'none',
      backgroundColor: 'transparent',
      color: 'white'
    }
  }
  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.navUser}>
          <button
            onClick={() => {dispatch(showModal('login'))}}
            style={styles.navUserItem}>
            Login
          </button>
          <button
            onClick={() => {dispatch(showModal('signup'))}}
            style={styles.navUserItem}>
            Sign Up
          </button>
        </div>
      </nav>
      {children}
      {modal && <RootModal modal={modal}/>}
    </div>
  )
}

const mapState = (state) => {
  return { modal: state.modal.modalType }
}

export default connect(mapState)(App)
