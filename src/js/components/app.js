import React from 'react'
import { connect } from 'react-redux'
import RootModal from '../containers/RootModal'
import { showModal, userLogout } from '../actions/actionCreators'

const App = ({ modal, children, dispatch, isAuthenticated }) => {

  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.navUser}>
          {
            isAuthenticated ? <Logout dispatch={dispatch} /> :
              <div>
                <Login dispatch={dispatch} />
                <Signup dispatch={dispatch} />
              </div>
           }
        </div>
      </nav>
      {children}
      {modal && <RootModal modal={modal}/>}
    </div>
  )
}

const mapState = (state) => {
  return {
    modal: state.modal.modalType,
    isAuthenticated: state.user.isAuthenticated
   }
}

export default connect(mapState)(App)


const Logout = ({dispatch}) => (
  <NavButton
    onClick={() => {dispatch(userLogout())}}>
    Logout
  </NavButton>
)

const Login = ({dispatch}) => (
  <NavButton
    onClick={() => {dispatch(showModal('login'))}}>
    Login
  </NavButton>
)

const Signup = ({dispatch}) => (
  <NavButton
    onClick={() => {dispatch(showModal('signup'))}}>
    Sign Up
  </NavButton>
)

const NavButton = ({onClick, children}) => (
  <button
    onClick={onClick}
    style={styles.navUserItem} >
    {children}
  </button>
)


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
