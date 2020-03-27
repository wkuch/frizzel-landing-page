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
      text: undefined,
      instaButton: undefined,
      redBubbleButton: undefined
    }
  }

  componentDidMount () {
    get('images/11', (jsonResponse) => {
      this.setState({ instaButton: jsonResponse.image })
    })
    get('images/12', (jsonResponse) => {
      this.setState({ redBubbleButton: jsonResponse.image })
    })
    get('images/1', (jsonResponse) => {
      this.setState({ title: jsonResponse.Title, image: jsonResponse.image, text: jsonResponse.Description })
    })
  }

  getFullURL (urlPart) {
    return window.apiURL + urlPart
  }

  renderLogo(stateVariable){
    if(!stateVariable){
      return(
        <Loading />
      )
    }
    return(
      <img style={iconStyle} className='col-md' src={this.getFullURL(stateVariable.url)} />
    )
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
        <div className='h1 text-center'>{state.title}</div>
        <div className='d-flex align-items-start row my-4 rounded'>
          <div className='col-md-6'>
            <img className='img-fluid rounded-lg' src={this.getFullURL(state.image.url)} />
          </div>
          <div className='col-md h4'>{state.text}</div>
        </div>
        <div className='row justify-content-around align-items-start my-4'>
          <div>
            <a href='https://www.instagram.com/frizzelblizzel'>
              {this.renderLogo(state.instaButton)}
            </a>
          </div>
          <div>
            <img style={iconStyle} className='col-md' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' />
          </div>
          <div>
            <a href='https://www.redbubble.com/de/people/Frizzel/shop?ref=artist_title_name'>
              {this.renderLogo(state.redBubbleButton)}
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default Article
