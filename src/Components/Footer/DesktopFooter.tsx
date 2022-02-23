import React from 'react';
import './DesktopFooter.scss'
import react_logo from './react_logo.png';
import turing_logo from './turing_logo.png';

const DesktopFooter = () => {
  return (
    <footer>
      <div className='footer-content'>
        <section className='project-description'>
          <h3>About</h3>
            <p>This is a Turing Module 3 project built with React.js. It was designed and developed by Jani Palomino and Daniel O'Connell.</p>
        <div className='logos'>
          <img src={react_logo} alt='react logo'/>
          <img src={turing_logo} alt='turing logo'/>
        </div>
        </section>
        <div className='social-links'>
          <h3>Follow Us</h3>
          <section className='repo'>
              <h4>Project Repo</h4>
              <a href='https://github.com/Daniel-OC/rancid-tomatillos' target='_blank' rel='noreferrer'>github.com/Daniel-OC/rancid-tomatillos</a>
          </section>
          <section className='github'>
              <h4>GitHub Profiles</h4>
              <a href='https://github.com/janitastic' target='_blank' rel='noreferrer'>Janitastic</a> |  
              <a href='https://github.com/Daniel-OC' target='_blank' rel='noreferrer'>Daniel-OC</a>
          </section>
          <section className='linkedin'>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/janipalomino/' target='_blank' rel='noreferrer'>Jani Palomino</a> | 
            <a href='https://www.linkedin.com/in/daniel-o-connell-maker/' target='_blank' rel='noreferrer'>Daniel O'Connell</a>
          </section>
        </div>
      </div>
      <div className='copyright'>
        <p>©2021 Palomino + O'Connell | Fine Film Critics</p>
      </div>
    </footer>
  )
}

export default DesktopFooter;