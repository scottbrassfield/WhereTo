import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Jumbotron style={styles.jumbotron}></Jumbotron>
    </div>
  )
}

export default Home

const styles = {
  jumbotron: {
    height: '100vh',
    width: '100vw'
  }
}
