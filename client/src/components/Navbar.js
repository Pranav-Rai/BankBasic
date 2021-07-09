import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className="logo">
    </div>
      <div className='navItems'>
        <NavLink exact activeClassName='navActive' className='navLink' to='/'>
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName='navActive'
          className='navLink'
          to='/Add users'
        >
          Add user
        </NavLink>
        <NavLink
          exact
          activeClassName='navActive'
          className='navLink'
          to='/customers'
        >
          Customers
        </NavLink>
        <NavLink
          exact
          activeClassName='navActive'
          className='navLink'
          to='/transactions'
        >
          Transactions
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
