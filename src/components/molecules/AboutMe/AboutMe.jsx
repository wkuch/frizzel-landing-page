import React, { Component } from 'react'
import { request } from 'graphql-request'
import { Loading } from '../../atoms/Loading/Loading'

const iconStyle = {
  maxHeight: '250px',
  width: 'auto'
}

class AboutMe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      aboutMeData: undefined
    }
  }

  componentDidMount () {
    const query = `{
      aboutMe(id:1){
        Title
        Description
        jojosImage{url}
        InstaButton{url}
        redbubbleButton{url}
      }
    }`
    request(window.apiURL + 'graphql', query).then(data => {
      
      console.log(data)
      this.setState({aboutMeData: data.aboutMe})
    })
  }

  getFullURL (urlPart) {
    return window.apiURL + urlPart
  }

  renderLogo(stateVariable){

    return(
      <img style={iconStyle} className='col-md' src={this.getFullURL(stateVariable.url)} />
    )
  }

  render () {
    const data = this.state.aboutMeData
  
    if (!data) {
      return (
        <Loading />
      )
    }
    console.log(data)
    return (
      <div className='py-4 d-flex flex-column align-items-stretch'>
        <div className='h1 text-center'>{data.Title}</div>
        <div className='d-flex align-items-start row my-4 rounded'>
          <div className='col-md-6'>
            <img className='img-fluid rounded-lg' src={this.getFullURL(data.jojosImage.url)} />
          </div>
          <div className='col-md h4 mt-3 mt-md-0'>{data.Description}</div>
        </div>
        <div className='row justify-content-around align-items-start my-4'>
          <div>
            <a target='_blank' href='https://www.instagram.com/frizzelblizzel'>
            <img style={iconStyle} className='col-md' src={this.getFullURL(data.InstaButton.url)} />
            </a>
          </div>
          <div>
            <a target='_blank' href='https://www.redbubble.com/de/people/Frizzel/shop?ref=artist_title_name'>
            <img style={iconStyle} className='col-md' src={this.getFullURL(data.redbubbleButton.url)} />
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default AboutMe
