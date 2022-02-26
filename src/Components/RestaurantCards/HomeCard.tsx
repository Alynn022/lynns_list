import './RestaurantCards.scss';
import yelp_icon_white from './yelp_icon_white.png';
import yelp_icon_black from './yelp_icon_black.png';
import Dropdown from '../Dropdown/AddToList';
// import AddToList from '../AddToListButton'
// import StarRatings from '../StarRatings/StarRatings';

interface Props {
  id: string,
  addToList: ((listName: string, id: string) => void),
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

const HomeCard: React.FC<Props> = (props: Props) => {
  return (
    <section className='home-card'>
      <img className='thumbnail' src={props.image} alt={`Photo of ${props.name}`} tabIndex={0}/>
      <article className='restaurant-info'>
      <h2 className='name' tabIndex={0}>{props.name}</h2>
        <p className='rating' tabIndex={0}>Rating: {props.rating}</p>
        {/* Don't delete, Jani is working on this ---> <StarRatings rating={props.rating} /> */}
        <p className='phone-number'><a href='tel:{props.phone}' className='phone-link' aria-label='phone number'>
          {props.phone}
        </a></p>
        <div className='address-container' tabIndex={0}>
          {displayAddress(props.location)}
        </div>
      </article>
      <article className='card-buttons'>
        
        <Dropdown />

        <button aria-label='click here to add to Gotta Go List' className='gotta-go' id={props.id} onClick={(event) => 
          props.addToList('gottaGo', props.id)}>Gotta Go!
        </button>
        <button aria-label='click here to add to Loved It List' className='loved-it' id={props.id} onClick={(event) => 
          props.addToList('lovedIt', props.id)}>Loved It!
        </button>
        <a href={props.url} target='_blank' tabIndex={-1}>
          <button className='more-info'>View On Yelp
            <img src={yelp_icon_white} alt='visit yelp page' className='yelp-logo-white'/>
            <img src={yelp_icon_black} alt='visit yelp page' className='yelp-logo-black'/>
          </button>
        </a>
      </article>
    </section>
  )
}

export default HomeCard;