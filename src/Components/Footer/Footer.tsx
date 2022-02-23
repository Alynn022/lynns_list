import * as React from 'react';
import './Footer.scss'
// which react router version are we installing?
// import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='hidden-desktop'>
      <section className='footer-home'>
        <h2>
          <a href='/' className='black-text'>Home</a>
        </h2>
      </section>
      <section className='footer-lists'>
        <h2>
          <a href='/MyLists' className='white-text'>My Lists</a>
        </h2>
      </section>
    </footer>
  )
}

export default Footer;