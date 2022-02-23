import * as React from 'react';
import './MobileFooter.scss'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='hidden-desktop'>
      <section className='mobile-nav'>
        <NavLink exact to='/' className='nav-item home' activeClassName='selected'>Home</NavLink>
        <NavLink exact to='/MyLists' className='nav-item lists' activeClassName='selected'>My Lists</NavLink>
      </section>
    </footer>
  )
}

export default Footer;