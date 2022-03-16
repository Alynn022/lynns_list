import * as React from 'react';
import './DesktopFooter.scss';
import react_logo from './react_logo.png';
import turing_logo from './turing_logo.png';

const DesktopFooter: React.FC = () => {
  return (
    <footer>
      <div className='footer-content hidden-mobile'>
        <section className='project-description'>
          <h3 tabIndex={0}>About</h3>
            <p tabIndex={0}>This is a Turing Module 3 project built with React.js, TypeScript, and the Yelp Fusion API. It was designed and developed by Lynn Nguyen, Jani Palomino, Daniel O'Connell, Ali Roemhildt.</p>
        <div className='logos'>
          <img src={react_logo} alt='react logo'/>
          <img src={turing_logo} alt='turing logo'/>
        </div>
        </section>
        <div className='social-links'>
          <h3 tabIndex={0}>Follow Us</h3>
          <section className='repo'>
              <h4 tabIndex={0}>Project Repo</h4>
            <a
              href='https://github.com/aliroemhildt/lynns_list'
              target='_blank'
              rel='noreferrer'
            >github.com/Alynn022/lynns_list</a>
          </section>
          <section className='github'>
            <h4 tabIndex={0}>GitHub Profiles</h4>
            <a
              href='https://github.com/ALynn022'
              target='_blank'
              rel='noreferrer'
            >Alynn022</a>
            |  
            <a
              href='https://github.com/janitastic'
              target='_blank'
              rel='noreferrer'
            >Janitastic</a>
            |  
            <a
              href='https://github.com/Daniel-OC'
              target='_blank'
              rel='noreferrer'
            >Daniel-OC</a>
            |
            <a
              href='https://github.com/aliroemhildt'
              target='_blank'
              rel='noreferrer'
            >AliRoemhildt</a>
          </section>
          <section className='linkedin'>
            <h4>LinkedIn</h4>
            <a
              href='https://www.linkedin.com/in/lynnnguyen22/'
              target='_blank'
              rel='noreferrer'
            >Lynn Nguyen</a>
            |
            <a
              href='https://www.linkedin.com/in/janipalomino/'
              target='_blank'
              rel='noreferrer'
            >Jani Palomino</a>
            | 
            <a
              href='https://www.linkedin.com/in/daniel-o-connell-maker/'
              target='_blank'
              rel='noreferrer'
            >Daniel O'Connell</a>
            | 
            <a
              href='https://www.linkedin.com/in/aliroemhildt/'
              target='_blank'
              rel='noreferrer'
            >Ali Roemhildt</a>
          </section>
        </div>
      </div>
      <div className='copyright'>
        <p>© Lynn's List | Dining, Drinks, and Desserts</p>
      </div>
    </footer>
  );
}

export default DesktopFooter;