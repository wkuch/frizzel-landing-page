import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = (props) => (
  <div className='bg-white'>
    <div className='container'>
      <div className='py-3 display-flex flex-row text-center'>
          <div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/frizzelblizzel'>Instagram</a>
          </div>
          <div>
            <a  target='_blank' rel="noopener noreferrer" href='https://www.redbubble.com/de/people/Frizzel/shop?ref=artist_title_name'>Redbubble</a>
          </div>
          <div>
            <a  href='mailto:frizzelblizzel@gmail.com'>info@frizzelblizzel.de</a>
          </div>
          <Link to='data-protection'>Datenschutzerklärung</Link>
      </div>
    </div>
  </div>
)
