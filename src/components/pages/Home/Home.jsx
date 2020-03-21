import React, { Component } from 'react'
import Article from '../../molecules/Article/Article'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='container'>
        <Article />
      </div>
    )
  }
}

export default Home
