import React from 'react'
import GridLoader from 'react-spinners/GridLoader'

export const Loading = props => (
  <div style={{ height: '100vh' }} className='d-flex justify-content-center py-5'>
    <GridLoader size={40} color='#aac7df' />
  </div>
)
