import * as React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <h1 onClick={() => {window.location.href='/'}}> Lynn's List</h1>
      </section>
      <nav className='hidden-mobile'>
        <ul className='menu'>
          <li>
            <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
          </li>
          <li>
            <NavLink strict to='/MyLists' activeClassName='selected'>My Lists</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;