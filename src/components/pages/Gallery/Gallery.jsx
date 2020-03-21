import React, { Component } from 'react'
import { get } from '../../../helper/frizzelApiConnection'
import { Loading } from '../../atoms/NavLink/Loading/Loading'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgNo: undefined,
      imgs: undefined
    }
  }

  componentDidMount () {
    get('images/2', jsonResponse => {
      const imgs = [
        {
          src: window.apiURL + jsonResponse.image.url
        },
        {
          src: window.apiURL + jsonResponse.image.url
        },
        {
          src: window.apiURL + jsonResponse.image.url
        }
      ]
      console.log(imgs)
      this.setState({ imgs })
    })
  }

  renderGalleryPreview (img) {
    return (
      <div className='d-flex flex-row justify-content-between my-5 row'>
        <div className='col-md-6'>
          <img className='img-fluid rounded-lg' src={img.src} />
        </div>
        <div className='col-md-4 mt-3 d-flex align-items-start justify-content-end'>
          <div className='bg-secondary rounded-lg p-3'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (!this.state.imgs) {
      return (
        <Loading />
      )
    }
    return (
      <div className='container d-flex flex-column'>
        Gallerie
        {this.state.imgs.map(img => (

          this.renderGalleryPreview(img)
        ))}
      </div>
    )
  }
}

export default Gallery
