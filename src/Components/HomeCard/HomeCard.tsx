import './HomeCard.scss';
import yelp_logo from './yelp_logo.png';
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

const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return ['(', match[2], ') ', match[3], '-', match[4]].join('');
  }
}


const HomeCard: React.FC<Props> = (props: Props) => {
  return (
    <div className='home-card'>
      <img className='thumbnail' src={props.image} alt={`${props.name} Image`} />
      <div className='restaurant-info'>
        <h2 className='name'>{props.name}</h2>
        <p className='rating'>Rating: {props.rating}</p>
        {/* <StarRatings rating={props.rating} /> */}
        {/* consider reformatting phone # below and linking it */}
        <a href='tel:{props.phone}'>{formatPhoneNumber(props.phone)}</a>
        <div className='address'>
          {displayAddress(props.location)}
        </div>
        <a href={props.url} target='_blank' className='yelp-link'><img src={yelp_logo} alt='visit yelp page' className='yelp-logo'/></a>
      </div>
      <div className='card-buttons'>
        <button className='gotta-go'
          id={props.id}
          onClick={(event) => 
          props.addToList('gottaGo', props.id)}>Gotta Go!</button>
        <button className='been-there'
        id={props.id}
        onClick={(event) => 
        props.addToList('lovedIt', props.id)}>Loved It!</button>
        <button className='more-info'>Tell Me More</button>
      </div>
    </div>
  )
}

export default HomeCard;