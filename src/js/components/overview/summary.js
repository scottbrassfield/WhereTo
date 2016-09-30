import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames'
require('../../../stylesheets/components/itinerary.scss')

const Summary = ({ destination, startDate, endDate, overview }) => {

  var summaryClass = classNames({
    'hidden': !overview,
    'active': !overview
  })

  return (
    <div id='summary' className={ summaryClass }>
      <Card>
        <CardMedia
          overlay={<CardTitle title={destination} subtitle={startDate + ' — ' + endDate}/>}>
          <img src='https://img1.steemit.com/0x0/https://www.saltwaterfarm.com/wp-content/uploads/2016/04/paris.jpg' />
        </CardMedia>
        <CardActions>
          <RaisedButton label='Update Trip Summary' />
        </CardActions>
      </Card>
    </div>
  )
}

function mapState(state) {
  let itinerary = state.itinerary;
  return (
    {
      destination: itinerary.destination,
      startDate: itinerary.startDate,
      endDate: itinerary.endDate,
      overview: itinerary.overview
    }
  )
}


module.exports = connect(mapState)(Summary);
