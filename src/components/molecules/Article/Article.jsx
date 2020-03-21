import React, { Component } from 'react'
import { get } from '../../../helper/frizzelApiConnection'
import { Loading } from '../../atoms/NavLink/Loading/Loading'

const iconStyle = {
  maxHeight: '250px',
  width: 'auto'
}

class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: undefined,
      image: undefined,
      text: undefined
    }
  }

  componentDidMount () {
    get('images/1', (jsonResponse) => {
      console.log(jsonResponse)
      this.setState({ title: jsonResponse.Title, image: jsonResponse.image, text: jsonResponse.Description })
    })
  }

  getFullURL (urlPart) {
    return window.apiURL + urlPart
  }

  render () {
    const state = this.state
    if (!state.image) {
      return (
        <Loading />
      )
    }
    return (
      <div className='py-4 d-flex flex-column align-items-stretch'>
        <div className='h2'>{state.title}</div>
        <div className='d-flex align-items-start row my-4'>
          <img className='img-fluid rounded-lg col-md-8' src={this.getFullURL(state.image.url)} />
          <div className='col-md'>{state.text}</div>
        </div>
        <div className='row justify-content-around align-items-start my-4'>
          <div>
            <img style={iconStyle} className='col-md' src='https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png' />
          </div>
          <div>
            <img style={iconStyle} className='col-md' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' />
          </div>
          <div>
            <img style={iconStyle} className='col-md' src='https://pbs.twimg.com/profile_images/1145954379268284416/VIBBICN0_400x400.png' />
          </div>
        </div>

      </div>
    )
  }
}

export default Article
