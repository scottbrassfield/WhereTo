import React from 'react'
import { connect  } from 'react-redux'
import Paper from 'material-ui/Paper'
import Header from './Header.js'
import VisiblePlans from '../../containers/VisiblePlans.js'
import '../../../stylesheets/config.scss'

const Itinerary = () => {

  return (
    <Paper className='itinerary'>
      <Header />
      <VisiblePlans />
    </Paper>
  )
}

export default connect()(Itinerary)
