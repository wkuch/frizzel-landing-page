import React, { Component } from 'react'
import { Loading } from '../../atoms/Loading/Loading'
import { request } from 'graphql-request'
import { ImgGallery } from '../../atoms/ImgGallery/ImgGallery'

export class GalleryDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined,
      images: undefined
    }
  }

  componentDidMount() {
    const variables = {
      id: this.props.match.params.galleryID
    }
    const query = `
      query getGallery($id: ID!){
        gallery(id: $id) {
          Typ
          Description
          images{
            original{url}
            thumbnail{url}
          }
        }
      }
    `

    request(window.apiURL + 'graphql', query, variables).then(data => {
      console.log(data)
      let images = []
      data.gallery.images.forEach(image => {
        images.push({
          original: window.apiURL + image.original.url,
          thumbnail: window.apiURL + image.thumbnail.url
        })
      })
      this.setState({ data: data.gallery, images })
    })
    // this.setState({ type })
  }

  render() {
    const data = this.state.data
    if (!data) {
      return (
        <Loading />
      )
    }
    console.log(this.state.images)
    return (
      <div className='container'>
        <h1 className='text-center py-4'>{data.Typ}</h1>
        <div className='col-12 col-md-8 mx-auto h4 mb-4'>
          {data.Description}
        </div>
        <div className='col-12 col-lg-8 m-auto'>
          <ImgGallery images={this.state.images} />
        </div>
      </div>
    )
  }
}
