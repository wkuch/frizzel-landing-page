import React from 'react'

export const Header = () => (
  <div className='frizzelHeader rounded-lg p-2 '>
    <nav className='navbar navbar-expand-md navbar-light'>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse d-flex justify-content-center' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item active mx-4'>
            <a className='nav-link h4' href='#'>Home <span className='sr-only'>(current)</span></a>
          </li>
          <li className='nav-item mx-4'>
            <a className='nav-link h4' href='#'>Features</a>
          </li>
          <li className='nav-item mx-4'>
            <a className='nav-link h4' href='#'>Pricing</a>
          </li>
          <li className='nav-item dropdown mx-4'>
            <a className='nav-link dropdown-toggle h4' href='#' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Dropdown link
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
              <a className='dropdown-item' href='#'>Action</a>
              <a className='dropdown-item' href='#'>Another action</a>
              <a className='dropdown-item' href='#'>Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
