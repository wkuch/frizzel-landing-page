import React, { Component } from 'react';
import { Header } from '../../molecules/Header/Header';
import { Footer } from '../../molecules/Footer/Footer';
import Tabete from '../../../assets/backgrounds/tapete.png'
import Logo from '../../../assets/logo/frizzel-logo.png'
export const Layout = (props) => {


  return (
    <div >
      <div className='bg' style={{ backgroundImage: `url(${Tabete})` }}></div>
      <div className='container flex-column d-flex justify-content-center mb-5'>
          <img  className='mx-auto' src={Logo} />
        <Header />
      </div>

      <div>
        {props.children}
      </div>
      {/* <Footer /> */}
    </div>
  );
}


export default Layout;