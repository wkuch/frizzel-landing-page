import React, { Component } from 'react'
import { Header } from '../../molecules/Header/Header'
import { Footer } from '../../molecules/Footer/Footer'
import Tabete from '../../../assets/backgrounds/tapete.png'
import Logo from '../../../assets/logo/frizzel-logo.png'
export const Layout = (props) => {
  return (
    <div>
      <div className='bg' style={{ backgroundImage: `url(${Tabete})` }} />
      <div className='container flex-column d-flex justify-content-center mb-5'>
        <img className='mx-auto my-5' src={Logo} />
      </div>
      <div className='container mb-5 sticky-top d-flex justify-content-center'>
        <Header />
      </div>

      <div className='mt-5 bg-white'>
        {props.children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
