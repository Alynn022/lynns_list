import './HomeCard.scss';
import * as React from 'react';
import yelp_logo from './yelp_logo.png';

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

interface StarRatingProps {
  rating?: number;
  numberOfStars?: number;
  changeRating?: (rating: number) => void;
  starRatedColor?: string;
  starEmptyColor?: string;
  starHoverColor?: string;
  starDimension?: string;
  starSpacing?: string;
  gradientPathName?: string;
  ignoreInlineStyles?: boolean;
  svgIconPath?: string;
  svgIconViewBox?: string;
  name?: string;
}

declare class StarRatings extends React.Component<
  StarRatingProps
> {}

const displayAddress = (address: string[]) => {
  return address.map((element, index) => 
    <p key={index} className='address'>{element}</p>
  )
}

const HomeCard: React.FC<Props> = (props: Props) => {
  return (
    <div className='home-card'>
      <img className='thumbnail' src={props.image} alt={`${props.name} Image`} />
      <div className='restaurant-info'>
        <h2 className='name'>{props.name}</h2>
        <p className='rating'>Rating: {props.rating}</p>
        {/* consider reformatting phone # below and linking it */}
        <p className='phone'>{props.phone}</p>
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