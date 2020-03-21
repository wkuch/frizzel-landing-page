import React from 'react'
import { NavLink } from '../../atoms/NavLink/NavLink'

export const Header = () => {
  const navItems = [{
    text: 'Über mich',
    to: '/',
    active: window.location.pathname === '/'
  },
  {
    text: 'Gallerie',
    to: '/gallerie',
    active: window.location.pathname.match(/gallerie/)
  },
  {
    text: 'Kontakt',
    to: '/kontakt',
    active: window.location.pathname.match(/auftrag/)
  }

  ]
  console.log(window.location.pathname)
  console.log(window.location.pathname === '/')
  return (
    <div className='frizzelHeader rounded-lg p-2 '>
      <nav className='navbar navbar-expand-md navbar-light d-flex justify-content-md-center justify-content-start'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='d-flex'>
          <div className='collapse navbar-collapse ' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              {
                navItems.map((navItem, i) => (
                  <NavLink key={i} text={navItem.text} to={navItem.to} active={navItem.active} />
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
