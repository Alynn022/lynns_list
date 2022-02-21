import * as React from 'react';
import './Header.scss'
// which react router version are we installing?
// import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <h1 onClick={() => {window.location.href='/'}}> Lynn's List</h1>
      </section>
      <nav>
          <a className='home' href='/'>Home</a>
          {/* <NavLink to='/'>Home</NavLink> */}
          <a href='/MyLists'>My Lists</a>
          {/* <NavLink to='/MyLists'>My Lists</NavLink> */}
      </nav>
    </header>
  )
}

export default Header;