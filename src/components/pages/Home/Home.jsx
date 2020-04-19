import React, { Component } from 'react'
import AboutMe from '../../molecules/AboutMe/AboutMe'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='container'>
        <AboutMe />
      </div>
    )
  }
}

export default Home
