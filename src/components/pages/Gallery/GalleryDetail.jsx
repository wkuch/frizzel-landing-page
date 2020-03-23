import React, { Component } from 'react'
import { Loading } from '../../atoms/NavLink/Loading/Loading'
import { request } from 'graphql-request'


export class GalleryDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    const variables = {
      id: this.props.match.params.id
    }
    const query = `
      query getGallery($id: ID!){
        gallery(id: $id) {
          Typ
          Description
          images {
            image {
              url
            }
          }
        }
      }
    `
    request(window.apiURL + 'graphql', query, variables).then(data => {
      console.log(data)
      this.setState({ data: data.gallery })
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
    return (
      <div className='container'>
        <div className='h1 py-4 text-center'>
          {data.Typ}
        </div>
        <div className='row'>
          {data.images.map((image, i) => {
            return (
              <div className='col-md-4 my-3'>
                <img src={window.apiURL + image.image.url} className='img-fluid rounded-lg' />
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}
