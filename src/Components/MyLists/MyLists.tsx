import * as React from 'react';
import { Restaurant } from '../../types';
import { UserLists } from '../../types';

interface Props {
  userLists: UserLists;
  removeFromList: (listName: string, id: string) => void;
}

// pass removeFromList to card components

const MyLists: React.FC<Props> = (props: Props) => {
  
  // maybe make one dynamic function to create cards

  const gottaGoCards = {};
    // map over userLists.gottaGo
    // for each rest. in list, create a Card
    // will be an array of card components

  const lovedItCards = {};
    // map over userLists.lovedIt
    // for each rest. in list, create a Card
    // will be an array of card components

  return (
      <div>
        <section
          className="gottaGo"
        >
          {gottaGoCards}
        </section>
        <section
          className="lovedIt"
        >
          {lovedItCards}
        </section>
      </div>
    )
  }

export default MyLists;