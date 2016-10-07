import React from 'react'

import { withGoogleMap, GoogleMap } from "react-google-maps";

const WrappedMap = withGoogleMap(() => {
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    >
    </GoogleMap>
)});

export default WrappedMap
