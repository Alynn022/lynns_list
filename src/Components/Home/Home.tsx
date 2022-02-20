import * as React from 'react';
import { Restaurant } from '../../types';
import HomeCard from '../HomeCard/HomeCard'

interface Props {
    restaurants: Restaurant[];
    addToList: ((listName: string, id: string) => void)
}

// pass addToList to card components (there will be a button for each list)

const Home: React.FC<Props> = (props: Props) => {
  const names = props.restaurants.map(restaurant => {return (
    <HomeCard 
    key={restaurant.id}
    id={restaurant.id}
    addToList={props.addToList}
    name={restaurant.name}
    rating={restaurant.rating}
    image={restaurant.image_url}
    location={restaurant.location.display_address}
    phone={restaurant.phone}
    url={restaurant.url}
    />
  )})  
  
  return (
    <div>
      {names}
    </div>
    )
  }

export default Home;