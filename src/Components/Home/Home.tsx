import * as React from 'react';
import { Restaurant } from '../../types';

interface Props {
    restaurants: Restaurant[];
    addToList: ((listName: string, id: string) => void)
}

// pass addToList to card components (there will be a button for each list)

const Home: React.FC<Props> = (props: Props) => {
  const names = props.restaurants.map(res => <p>{res.name}</p>)  
  
  return (
    <div>
      {names}
    </div>
    )
  }

export default Home;