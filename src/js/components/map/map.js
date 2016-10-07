import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

class Map extends React.Component {

  componentDidMount() {

    var map = new google.maps.Map(
      this.refs.map,
      this.props.mapOptions
    );

    this.props.markers.forEach( (marker) => {
      new google.maps.Marker({
        position: marker.position,
        map: map,
        title: marker.title
      });
    })

    this.saveMap(map, this.props.dispatch)
  }

  saveMap(map, dispatch) {
    dispatch({
      type: 'LOAD_MAP',
      map
    })
  }

  toggleMap() {
    let mapClass = classNames({
      'hidden': !this.props.overview
    })
    return mapClass
  }

  render() {
    const mapStyle = {
      marginTop: 12,
      width: '100%',
      height: 500
    }

    return (
      <div ref='map' style={mapStyle} className={this.toggleMap()}></div>
    )
  }
}

const mapState = (state) => {
  return {
    mapOptions: state.map.details,
    markers: state.map.markers,
    overview: state.overview.complete,
    destination: state.overview.destination,
    map: state.map.main
  }
}

export default connect(mapState)(Map)
