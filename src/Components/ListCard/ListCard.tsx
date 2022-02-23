import './ListCard.scss';
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
    <div className='list-card'>
      <img className='thumbnail' src={props.image} alt={`${props.name} Image`} />
      <div className='restaurant-info'>
        <h2 className='name'>{props.name}</h2>
        <p className='rating'>Rating: {props.rating}</p>
        {/* consider reformatting phone # below and linking it */}
        <p className='phone'>{props.phone}</p>
        <div className='address-container'>
          {displayAddress(props.location)}
        </div>
        {/* may consider adding yelp logo icon below */}
        <a href={props.url} target='_blank' className='yelp-link'>Yelp Link</a>
      </div>
      <div className='card-buttons'>
        <button className='gotta-go'
          id={props.id}
          onClick={(event) => 
          props.removeFromList('gottaGo', props.id)}>Remove From Gotta Go</button>
        <button className='been-there'
        id={props.id}
        onClick={(event) => 
        props.removeFromList('lovedIt', props.id)}>Remove From Loved It</button>
        <button className='more-info'>Tell Me More</button>
      </div>
    </div>
  )
}


export default ListCard;
