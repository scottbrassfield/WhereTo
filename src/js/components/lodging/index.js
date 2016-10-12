import React from 'react'
import LodgingList from './LodgingList'
import LodgingInput from '../../containers/ConnectedLodging'

const Lodging = () => {
  return (
    <div>
      <LodgingList />
      <LodgingInput />
    </div>
  )
}

export default Lodging
