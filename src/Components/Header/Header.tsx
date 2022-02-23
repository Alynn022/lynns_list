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
        <NavLink to='/' className='home' >Home</NavLink>
        <NavLink to='/MyLists' className='my-lists-nav'>My Lists</NavLink>
      </nav>
    </header>
  )
}

export default Header;