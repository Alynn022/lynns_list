import * as React from 'react';
import './Error.scss';
import sad_ice_cream_boy from './sad_ice_cream_boy.jpg';
import { Link } from 'react-router-dom';

interface Props {
  error: string
}

const Error: React.FC<Props> = (props: Props) => {
  return (
    <section className='error-container'>
      <img
        src={sad_ice_cream_boy}
        className='sad-ice-cream-boy'
        alt='sad boy who dropped his ice cream'
      />
      <p className='error-message'>{props.error}</p>
      { !props.error.includes('5')
        && <Link to='/' className='nav-back-home-error'>Take Me Home!</Link>
      }
    </section>
  );
}

export default Error;
