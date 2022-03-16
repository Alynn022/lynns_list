import * as React from 'react';
import './MobileFooter.scss';
import { NavLink } from 'react-router-dom';

const MobileFooter: React.FC = () => {
  return (
    <footer className='hidden-desktop'>
      <section className='mobile-nav'>
        <NavLink
          exact to='/'
          className='nav-item home'
          activeClassName='selected'
        >
          Home
        </NavLink>
        <NavLink
          exact to='/gottago'
          className='nav-item lists'
          activeClassName='selected'
        >
          My Lists
        </NavLink>
      </section>
    </footer>
  );
}

export default MobileFooter;