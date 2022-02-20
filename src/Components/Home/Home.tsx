import * as React from 'react';
import { Restaurant } from '../../types';

// interface Props {
//     restaurants: Restaurant[];
//     addToList: ((listName: string, id: string) => void)
// }

const Home: React.FC<{
        restaurants: Restaurant[];
        addToList: ((listName: string, id: string) => void)
    }> = (restaurants, addToList) => {
    return (
    <div>
      <p>Hi</p>
      {restaurants}
      {/* move button to card file */}
      <button
        onClick={(e) => addToList(e.target.name, e.target.id)}
      >  
      </button>
    </div>
    )
  }

export default Home;