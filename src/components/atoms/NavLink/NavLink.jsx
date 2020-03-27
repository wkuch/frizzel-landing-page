import React from 'react'
import c from 'classnames'
import { Link } from 'react-router-dom'

export const NavLink = props => {
  console.log(props.href)
  return (

    <div className='nav-item'>
      <li className={c([
        'mx-4',
        props.active && 'active'
      ])}
      >
        {renderLink(props)}
      </li>
    </div>
  )
}

const renderLink = (props) => {
  if (props.href) {
    return (
      <a className='nav-link h1' target='_blank' href={props.href} >{props.text}</a>
    )
  }
  return (
    <Link className='nav-link h1' to={props.to} >{props.text}</Link>
  )
}