import { create } from 'domain';
import * as React from 'react';
import './MyLists.scss';
import { Restaurant } from '../../types';
import { UserLists } from '../../types';
import ListCard from '../ListCard/ListCard';

interface Props {
  userLists: UserLists;
  removeFromList: (listName: string, id: string) => void;
}

const MyLists: React.FC<Props> = (props: Props) => {
  let cardsToDisplay;
  const createCurrentList = (listName: string) => {
    cardsToDisplay = props.userLists[listName].map(restaurant => { return (
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

const gottaGoList = createCurrentList('gottaGo');
const lovedItList = createCurrentList('lovedIt');

// const handleChange = (event) => {

// }

return (
    <div>
      <section className='list-dropdown-container'>
        <p className='instructions'>
          Choose which list you'd like to view below. Or create a new list.
        </p>
        <select className='list-dropdown' onChange={event => {
          createCurrentList(event.target.value)
          console.log(event.target.value)
        }}>
          <option value='gottaGo'>Gotta Go!</option>
          <option value='lovedIt'> Loved It!</option>
          <option value='addNewList'> Create New List!</option>
        </select>
      </section>
      <section className='listView'>
        { gottaGoList }
        { cardsToDisplay }
      </section>
    </div>
  )
}

export default MyLists;