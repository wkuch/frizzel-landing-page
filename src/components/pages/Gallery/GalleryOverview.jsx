import React, { Component } from 'react'
import { Loading } from '../../atoms/Loading/Loading'
import c from 'classnames'
import { Link } from 'react-router-dom'
import { request } from 'graphql-request'

export class GalleryOverview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      galleries: undefined
    }
  }

  componentDidMount () {
    const query = `{
      galleries{
        Typ
        id
        Description
        PreviewImage {
          url
        }
      }
    }`
    request(window.apiURL + 'graphql', query).then(data => {
      console.log(data.galleries)
      this.setState({ galleries: data.galleries })
    })
  }

  renderGalleryPreview (gallery, i) {
    const even = (i % 2) === 0
    return (
      <div key={i} className='d-flex flex-row rounded-lg justify-content-between my-3 row shadow-lg no-gutters'>
        <div className={c([
          'col-md-6 p-3',
          even ? 'order-1' : 'order-2'
        ])}
        >
          <img className='img-fluid rounded-lg' src={window.apiURL + gallery.PreviewImage.url} />
        </div>
        <div className={c([
          'col-md-5 my-3 my-md-5 mx-3 d-flex justify-content-end',
          even ? 'order-2 align-items-end' : 'order-1 align-items-start'
        ])}
        >
          <div className={c([
            'd-flex p-3',
            even ? 'align-items-end flex-column' : 'align-items-start flex-column-reverse'
          ])}
          >
            <div className={c([
              'h2',
              even ? 'align-self-start' : 'align-self-end'
            ])}
            >{gallery.Typ}
            </div>
            <Link to={'/gallerie/' + gallery.id} className='btn btn-secondary btn-lg m-3'>Mehr davon</Link>
            <div className='rounded-lg h4'>
              {gallery.Description}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (!this.state.galleries) {
      return (
        <Loading />
      )
    }
    return (
      <div className='container d-flex flex-column'>
        <div className='text-center h1 mt-3'>
        Gallerie
        </div>
        {this.state.galleries.map((gallery, i) => (
          this.renderGalleryPreview(gallery, i)
        ))}
      </div>
    )
  }
}
