import React, { Component } from 'react'
import { Loading } from '../../atoms/Loading/Loading'
import { request } from 'graphql-request'
import { FrizzelDropzone } from '../../molecules/Article/FrizzelDropzone/FrizzelDropzone'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: undefined,
      styleImages: undefined
    }
  }

  componentDidMount() {
    const userData = {
      name: '',
      email: '',
      chosenStyle: '',
      chosenDetail: '',
      chosenCharNumber: 1,
      chosenPose: '',
      reference: [],
      additionalInfo: ''
    }

    const query = `
    {
      request-form-contents {
        Title
        image {
          url
        }
      }
    }
    `
    request(window.apiURL + 'graphql', query).then(data => {
      this.setState({ styleImages: data.images })
    })

    this.setState({ userData })
  }

  handleInputChange(value, field) {
    console.log(value)
    this.setState(state => {
      if (state.userData.hasOwnProperty(field)) {
        state.userData[field] = value
        return state
      }
    })
  }

  renderCheckBoxWithImage(image) {
    return (
      <div className='col-md-4 col-8'>
        <img className='img-fluid rounded-lg' src={window.apiURL + image.image.url} alt='' />
        <div className='h3 d-flex justify-content-center'>
          <div>
            <input type='checkbox' className='form-check-input' />
          </div>
          {image.Title}
        </div>
      </div>
    )

  }

  render() {
    const userData = this.state.userData
    if (!this.state.styleImages) {
      return (
        <Loading />
      )
    }
    console.log(this.state.styleImages)
    return (
      <div className='container'>
        <div className='text-center h1 pt-4'>
          Kontakt
        </div>
        <div className='d-flex flex-column'>
          <div className='h4 text-left text-center mx-auto col-md-8 mt-2 mb-4'>
            Wenn du möchtest, dass ich für dich ein Bild genau nach deinen Vorstellungen male bist du hier genau richtig. Fülle as Formular unten aus damit ich gleich weiß was du dir vorstellst. Ich werde mich dann bei dir melden um die Details direkt mit dir zu klären.
          </div>
          <div className='my-3'>
            <div className='h2'>Deine Kontaktdaten</div>
            <div className='row'>
              <div className='d-flex flex-column mr-3 col-10 col-sm-6 col-md-4 col-lg-3'>
                <label for='userName' className='h5'>Name</label>
                <input id='userName' className='form-control-lg' type='text' placeholder='Name' onChange={e => this.handleInputChange(e.target.value, 'name')} value={this.state.userData.name} />
              </div>
              <div className='d-flex flex-column col-10 col-sm-6 col-md-4 col-lg-3'>
                <label for='email' className='h5'>Email</label>
                <input id='email' className='form-control-lg' type='text' placeholder='Email' onChange={e => this.handleInputChange(e.target.value, 'email')} value={this.state.userData.email} />
              </div>
            </div>
            <div className='h2 mt-4'>Stil</div>
            <div className='row col-lg-8'>
              {this.renderCheckBoxWithImage(this.state.styleImages[8])}
              {this.renderCheckBoxWithImage(this.state.styleImages[8])}
              {this.renderCheckBoxWithImage(this.state.styleImages[8])}
            </div>
            <div className='h2 mt-4'>Detailgrad</div>
            <div className='row col-lg-8'>
              {this.renderCheckBoxWithImage(this.state.styleImages[11])}
              {this.renderCheckBoxWithImage(this.state.styleImages[11])}
              {this.renderCheckBoxWithImage(this.state.styleImages[11])}
            </div>
            <div className='h2 mt-4'>Wieviele Charaktäre</div>
            <div className='row col-lg-8'>
              {this.renderCheckBoxWithImage(this.state.styleImages[8])}
              {this.renderCheckBoxWithImage(this.state.styleImages[12])}
              {this.renderCheckBoxWithImage(this.state.styleImages[13])}
            </div>
            <div className='h2 mt-4'>Referenzbild</div>
              <FrizzelDropzone />
            <div className='h2 mt-4'>Zusätzliche Infos für mich</div>
            
            <textarea className="form-control"  rows="3"></textarea>

          </div>
        </div>
      </div>
    )
  }
}

export default Contact
