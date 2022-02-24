import * as React from "react";
import sad_ice_cream_boy from './sad_ice_cream_boy.jpg'
import './Error.scss'
import { Link } from 'react-router-dom'

interface Props {
  error: string
}

const Error: React.FC<Props> = (props: Props) => {
  return (
    <section className='error-container'>
      <img src={sad_ice_cream_boy}/>
      <p>{props.error}</p>
      {!props.error.includes('5') && <Link to='/'>Take Me Home!!</Link>}
    </section>
  )
}

export default Error;