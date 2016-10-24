import React from 'react'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const WrappedMap = withGoogleMap( ({ markers, center }) => {
  return (
    <GoogleMap
      defaultZoom={12}
      center={center}
    >
    { markers.map((marker, index) => (
      <Marker position={marker.place.geometry.location} key={index} />
    )) }
    </GoogleMap>
)});

export default WrappedMap
