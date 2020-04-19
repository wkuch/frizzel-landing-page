import React from 'react'
import { Header } from '../../molecules/Header/Header'
import { Footer } from '../../molecules/Footer/Footer'
import Tabete from '../../../assets/backgrounds/tapete.jpg'
import Logo from '../../../assets/logo/frizzel-logo.png'
export const Layout = (props) => {
  return (
    <div>
      <div className='bg' style={{ backgroundImage: `url(${Tabete})` }} />
      <div>
        <div className='container flex-column d-flex col-10 col-md-7 col-lg-3 justify-content-center mb-5'>
          <img className='mx-auto my-5 img-fluid' src={Logo} alt='Frizzel-Logo' />
        </div>
        <div className='container mb-5 sticky-top'>
          <Header />
        </div>
        <div className='my-5 bg-white'>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
