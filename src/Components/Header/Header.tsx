import * as React from 'react';
import './Header.scss';
import lynnslist_logo from './lynnslist_logo.png';
import lynnslist_logo_mobile from './lynnslist_logo_mobile.png';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <section
        className='logo-container'
        tabIndex={0}
        onClick={() => {window.location.href='/'}}
      >
        <img
          className='logo hidden-mobile'
          src={lynnslist_logo}
          alt="Lynn's List"
        /> 
        <img
          className='mobile-logo hidden-desktop'
          src={lynnslist_logo_mobile}
          alt="Lynn's List"
        /> 
        <h1 className='hidden-mobile hidden-desktop'>Lynn's List</h1>
      </section>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink
              exact to='/'
              activeClassName='selected'
              id="home-nav-button"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact to='/gottago'
              activeClassName='selected'
              id="my-lists-nav"
            >
              My Lists
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;