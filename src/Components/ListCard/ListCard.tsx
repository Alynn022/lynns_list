import '../HomeCard/HomeCard.scss';
import yelp_logo from '../HomeCard/yelp_logo.png';
import { UserLists } from '../../types';

interface Props {
  removeFromList: (listName: string, id: string) => void;
  id: string,
  name: string,
  rating: number,
  image: string,
  location: string[],
  phone: string,
  url: string,
  key: string
}

const displayAddress = (address: string[]) => {
  return address.map((element, index) => 
    <p key={index} className='address'>{element}</p>
  )
}

const ListCard: React.FC<Props> = (props: Props) => {
  return (
    <section className='list-card'>
      <img className='thumbnail' src={props.image} alt={`${props.name} Image`} />
      <article className='restaurant-info'>
        <h2 className='name'>{props.name}</h2>
        <p className='rating'>Rating: {props.rating}</p>
        <p className='phone-number'><a href='tel:{props.phone}' className='phone-link' aria-label='phone number'>
          {props.phone}
        </a></p>
        <div className='address-container'>
          {displayAddress(props.location)}
        </div>
        <a href={props.url} target='_blank' className='yelp-link'><img src={yelp_logo} alt='visit yelp page' className='yelp-logo'/>
        </a>
      </article>
      <article className='card-buttons'>
        <button className='gotta-go'
          id={props.id}
          onClick={(event) => 
          props.removeFromList('gottaGo', props.id)}>Remove From Gotta Go</button>
        <button className='loved-it'
        id={props.id}
        onClick={(event) => 
        props.removeFromList('lovedIt', props.id)}>Remove From Loved It</button>
        {/* <button className='more-info'>Tell Me More</button> */}
      </article>
    </section>
  )
}


export default ListCard;
