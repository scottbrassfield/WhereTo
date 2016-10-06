import React from 'react'
import Paper from 'material-ui/Paper'
import classNames from 'classnames'
import { connect  } from 'react-redux'
import Header from './header.js'
import VisiblePlans from '../../containers/visible-plans.js'
import '../../../stylesheets/components/itinerary.scss'

const Itinerary = ({ overview }) => {

  let itineraryClass = classNames({
    'hidden': !overview
  })

  return (
    <Paper className={itineraryClass} id='itinerary' style={{marginTop: '30px', minHeight: '500px'}}>
      <Header />
      <VisiblePlans />
    </Paper>
  )
}

const mapState = (state) => {
  return {overview: state.overview.complete}
}

export default connect(mapState)(Itinerary)
