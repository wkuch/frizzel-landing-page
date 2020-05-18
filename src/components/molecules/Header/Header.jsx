import React, { Component } from 'react'
import { NavLink } from '../../atoms/NavLink/NavLink'
import { Loading } from '../../atoms/Loading/Loading'
import textbackground from '../../../assets/backgrounds/textbackground.png'


export class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navItems: undefined
    }
  }

  componentDidMount () {
    const navItems = [{
      text: 'Über mich',
      to: '/',
      active: window.location.pathname === '/'
    },
    {
      text: 'Shop',
      href: 'https://www.redbubble.com/de/people/Frizzel/shop?ref=artist_title_name',
      active: false
    }]
    this.setState({ navItems })
  }

  render () {
    if (!this.state.navItems) {
      return (
        <Loading />
      )
    }
    return (
      <div className='frizzelHeader rounded-lg p-2 '>
        <nav className='navbar navbar-expand navbar-light d-flex justify-content-center'>
          {/* <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button> */}
          <div className='d-flex'>
            <div className=' navbar-collapse ' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                {
                  this.state.navItems.map((navItem, i) => (
                    <div style={i === 0 ? { backgroundImage: `url(${textbackground})`}:{}} className='txtBG'>
                      <NavLink key={i} text={navItem.text} to={navItem.to} href={navItem.href} active={navItem.active} />
                    </div>
                  ))
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
