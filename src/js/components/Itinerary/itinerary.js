import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './header.js'
import Plans from './plans.js'
import '../../../stylesheets/components/itinerary.scss'

const Itinerary = () => {
  return (
    <Paper id='itinerary' style={{marginTop: '30px', minHeight: '500px'}}>
      <Header />
      <Plans />
    </Paper>
  )
}

module.exports = Itinerary;
