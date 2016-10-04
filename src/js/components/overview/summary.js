import React from 'react';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import classNames from 'classnames';
import '../../../stylesheets/components/overview.scss';
import { updateOverview } from '../../actions/action-creators';


const Summary = ({ destination, startDate, endDate, complete, updateOverview}) => {

  var summaryClass = classNames({
    'hidden': !complete,
    'active': complete
  })

  return (
    <div id='summary' className={ summaryClass }>
      <Card style={{width: '350px'}}>
        <CardMedia
          overlay={<CardTitle title={destination} subtitle={startDate + ' — ' + endDate}/>}>
          <img src='http://www.parisperfect.com/blog/wp-content/uploads/2011/03/panoramic_view_chateau_latour.jpg' />
        </CardMedia>
        <CardActions>
          <div onClick={() => updateOverview(!complete) }>
            <RaisedButton label='Update Trip Summary' />
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

const mapState = (state) => {
  return (
    {
      destination: state.overview.destination,
      startDate: state.overview.startDate,
      endDate: state.overview.endDate,
      complete: state.overview.complete
    }
  )
}

module.exports = connect(mapState, {updateOverview})(Summary);
