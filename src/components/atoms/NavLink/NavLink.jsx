import React from 'react'
import c from 'classnames'
import { Link } from 'react-router-dom'

export const NavLink = props => (
  <div className='nav-item'>
    <li className={c([
      'mx-4',
      props.active && 'active'
    ])}
    >
      <Link className='nav-link h4' to={props.to}>{props.text}</Link>
    </li>
  </div>
)
