import * as React from 'react';
import { Restaurant } from '../../types';
import { UserLists } from '../../types';
import ListCard from '../ListCard/ListCard';

interface Props {
  userLists: UserLists;
  removeFromList: (listName: string, id: string) => void;
}

// pass removeFromList to card components

const MyLists: React.FC<Props> = (props: Props) => {
  const createCurrentList = (listName: string) => {
    return props.userLists[listName].map(restaurant => { return (
      <ListCard 
      key={restaurant.id}
      id={restaurant.id}
      removeFromList={props.removeFromList}
      name={restaurant.name}
      rating={restaurant.rating}
      image={restaurant.image_url}
      location={restaurant.location.display_address}
      phone={restaurant.phone}
      url={restaurant.url}
      />
    )
  })
}

  const gottaGoCards = createCurrentList('gottaGo')

  const lovedItCards = createCurrentList('lovedIt')
  
  return (
      <div>
        <section
          className="gottaGo"
        >
          <p>Gotta Go!</p>
          {gottaGoCards}
        </section>
        <section
          className="lovedIt"
        >
          <p>Loved It!</p>
          {lovedItCards}
        </section>
      </div>
    )
  }

export default MyLists;