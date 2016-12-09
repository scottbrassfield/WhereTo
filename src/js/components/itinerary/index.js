import React from 'react'
import { connect  } from 'react-redux'
import classNames from 'classnames'
import Paper from 'material-ui/Paper'
import Header from './Header.js'
import VisiblePlans from '../../containers/VisiblePlans.js'
import '../../../stylesheets/config.scss'

const Itinerary = ({ overview }) => {

  let itineraryClass = classNames({
    'hidden': !overview
  })

  return (
    <Paper className={itineraryClass} id='itinerary' style={{marginTop: '30px', height: '570px'}}>
      <Header />
      <VisiblePlans />
    </Paper>
  )
}

const mapState = (state) => {
  return {overview: state.overview.complete}
}

export default connect(mapState)(Itinerary)
