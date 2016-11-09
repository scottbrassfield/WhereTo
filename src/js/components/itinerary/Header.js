import React from 'react'
import { connect } from 'react-redux'
import ConnectedCalendar from '../../containers/ConnectedCalendar'
import { showForm } from '../../actions/actionCreators'

const Header = ({ dispatch }) => {
  return (
    <div>
      <ConnectedCalendar />
      <div
        style={{display: 'inline-block', width: '70%', verticalAlign: 'top', paddingTop: '10px'}}
      >
      <button type='submit'
        style={{marginTop: '10px', marginLeft: '20%', backgroundColor: '#4b6db8', color: '#fafafa', borderStyle: 'none', borderRadius: '4px', padding: '12px 40px', fontSize: '20px', cursor: 'pointer'}}
        onClick={ () => dispatch(showForm('plans', true)) }
      >
        Add a new plan
      </button>
      </div>
    </div>
  )
}

module.exports = connect()(Header);
