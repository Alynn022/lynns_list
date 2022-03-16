import '../RestaurantCards/RestaurantCards.scss';
import yelp_icon_white from './yelp_icon_white.png';
import yelp_icon_black from './yelp_icon_black.png';

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
  selectedList: string
}

const displayAddress = (address: string[]) => {
  return address.map((element, index) => 
    <p key={index} className='address'>{element}</p>
  );
}

const ListCard: React.FC<Props> = (props: Props) => {
  return (
    <section className='list-card'>
      <img
        className='thumbnail'
        src={props.image}
        alt={`${props.name}`}
        tabIndex={0}
      />
      <article className='restaurant-info'>
        <h2 className='name' tabIndex={0}>{props.name}</h2>
        <p className='rating' tabIndex={0}>Rating: {props.rating}</p>
        <p className='phone-number'>
          <a
            href={`tel:${props.phone}`}
            className='phone-link'
            aria-label='phone number'
          >
            {props.phone}
          </a>
        </p>
        <div className='address-container' tabIndex={0}>
          { displayAddress(props.location) }
        </div>
      </article>
      <article className='card-buttons'>
        <button
          className='delete-button'
          id={props.id}
          onClick={() => props.removeFromList(props.selectedList, props.id)}
        >
          Remove From List
        </button>
        <a
          className='yelp-link'
          href={props.url}
          target='_blank'
          tabIndex={-1}
          rel='noreferrer'
        >
          <button className='more-info'>
            View On Yelp
            <img
              src={yelp_icon_white}
              alt='visit yelp page'
              className='yelp-logo-white'
            />
            <img
              src={yelp_icon_black}
              alt='visit yelp page'
              className='yelp-logo-black'
            />
          </button>
        </a>
      </article>
    </section>
  );
}

export default ListCard;
