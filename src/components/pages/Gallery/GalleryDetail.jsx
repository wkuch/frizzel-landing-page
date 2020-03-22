import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../atoms/NavLink/Loading/Loading'

export class GalleryDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: undefined,
      type: undefined
    }
  }

  componentDidMount () {
    const type = this.props.match.params.type
    console.log(type)
    this.setState({ type })
  }

  render () {
    if (!this.state.type) {
      return (
        <Loading />
      )
    }
    console.log(this.state.type)

    return (
      <div className='container'>
        {this.state.type}
      </div>
    )
  }
}
