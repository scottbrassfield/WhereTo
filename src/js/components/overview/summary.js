import React from 'react'
import { connect } from 'react-redux'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames'
import '../../../stylesheets/components/overview.scss'

const Summary = ({ destination, startDate, endDate, overview, dispatch}) => {

  var summaryClass = classNames({
    'hidden': !overview,
    'active': overview
  })

  return (
    <div id='summary' className={ summaryClass }>
      <Card style={{width: '350px'}}>
        <CardMedia
          overlay={<CardTitle title={destination} subtitle={startDate + ' — ' + endDate}/>}>
          <img src='http://www.parisperfect.com/blog/wp-content/uploads/2011/03/panoramic_view_chateau_latour.jpg' />
        </CardMedia>
        <CardActions>
          <div onClick={() => dispatch({type: 'UPDATE_OVERVIEW', complete: false}) }>
            <RaisedButton label='Update Trip Summary' />
          </div>
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
