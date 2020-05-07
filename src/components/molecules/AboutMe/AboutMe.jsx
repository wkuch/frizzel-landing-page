import React, { Component } from 'react'
import { request } from 'graphql-request'
import { Loading } from '../../atoms/Loading/Loading'
import textbackground from '../../../assets/backgrounds/textbackground.png'
import textbackgroundBlue from '../../../assets/backgrounds/textbackground-blue.png'
import c from 'classnames'
import ReactMarkdown from 'react-markdown'

const iconStyle = {
  maxHeight: '250px',
  width: 'auto'
}

class AboutMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutMeData: undefined
    }
  }

  componentDidMount() {
    const query = `{
      aboutMe(id:1){
        Title
        Description
        InstaButton{url}
        RedbubbleButton{url}
        about_me_parts{
          Topic
          FormattedText
          Image{
            url
          }
        }
      }
    }`
    console.log('about to request')
    request(window.apiURL + '/graphql', query).then(data => {
      console.log('got it')

      console.log(data.aboutMe)
      this.setState({ aboutMeData: data.aboutMe })

    })
  }

  getFullURL(urlPart) {
    return window.apiURL + urlPart
  }

  renderAboutMePart(part, i) {
    return (
      <div key={i} className='d-flex justify-content-around align-items-center row my-4 rounded'>
        <div className={c([
          'col-md-5',
          i % 2 === 0 ? 'order-first' : 'order-md-last'
        ])}>
          <div style={{fontFamily: 'frz-capital', backgroundImage: `url(${textbackgroundBlue})`}} className='h2 text-center txtBG'>
            {part.Topic}
          </div>
          <img className='img-fluid rounded-lg' src={this.getFullURL(part.Image.url)} alt={'Über mich Bild Nr. '+i} />
        </div>
        <div className='col-md-5 mt-2 mt-md-0 '>
          
          <div className='txtBG p-5 h4'
            style={{ backgroundImage: `url(${textbackground})` }}
          >
            <ReactMarkdown source={part.FormattedText} />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    )
  }

  render() {
    const data = this.state.aboutMeData
    if (!data) {
      return (
        <Loading />
        )
      }
    console.log(data)
    return (
      <div className='py-4 d-flex flex-column align-items-stretch'>
        <div className='d-flex flex-column  align-items-center'>
        <div style={{fontFamily: 'frz-capital', backgroundImage: `url(${textbackgroundBlue})`}} className='h1 p-3 text-center txtBG'>{data.Title}</div>
        </div>
        {data.about_me_parts.map((part, i) => {
          return this.renderAboutMePart(part, i)
        })}
        <div className='row justify-content-around align-items-start my-4'>
          <div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/frizzelblizzel'>
              <img alt='instagram link button' style={iconStyle} className='col-md' src={this.getFullURL(data.InstaButton.url)} />
            </a>
          </div>
          <div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.redbubble.com/de/people/Frizzel/shop?ref=artist_title_name'>
              <img alt='redbubble link button' style={iconStyle} className='col-md' src={this.getFullURL(data.RedbubbleButton.url)} />
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default AboutMe
