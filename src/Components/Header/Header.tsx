import * as React from 'react';
import './Header.scss'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <h1 tabIndex={0} onClick={() => {window.location.href='/'}}> Lynn's List</h1>
      </section>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink exact to='/' activeClassName='selected' id="home-nav-button">Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/gottago' activeClassName='selected' id="my-lists-nav">My Lists</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;