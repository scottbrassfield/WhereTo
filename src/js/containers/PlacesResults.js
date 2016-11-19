import React from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import Places from '../components/Places'

const PlacesResults = ({places, ...rest}) => {
  var title;
  if (!places.length) {
    title = 'That search didn\'t return anything. Try again.'
  } else if (places.length === 1) {
    title = 'Is this the correct destination?'
  } else {
    title = 'Are any of these what you were looking for?'
  }

  return (
    <Places title={title} places={places} {...rest} />
  )
}

const mapState = (state) => {
  const selector = formValueSelector('overview')
  return {
    show: state.places.showResults,
    places: state.places.searchResults,
    values: selector(state, 'destination', 'startDate', 'endDate'),
    overview: state.overview.complete
  }
}

export default connect(mapState)(PlacesResults)
