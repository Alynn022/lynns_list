import * as React from 'react';
import './MyLists.scss';
import { UserLists } from '../../types';
import ListCard from '../RestaurantCards/ListCard';

interface Props {
  userLists: UserLists;
  removeFromList: (listName: string, id: string) => void;
}

interface State {
  cardsToDisplay: JSX.Element[], 
  selectedList: string
}

class MyLists extends React.Component<Props, State> {
  state: State = {
    cardsToDisplay: [],
    selectedList: 'gottaGo'
  }

  componentDidMount = () => {
    this.createCardsToDisplay();
  }
 
  componentDidUpdate = () => {
    if (this.state.cardsToDisplay.length !== this.props.userLists[this.state.selectedList].length) {
      this.createCardsToDisplay();
    }
  }

  createCardsToDisplay = () => {
    const cards = this.props.userLists[this.state.selectedList].map(restaurant => {
      return (
        <ListCard 
          key={restaurant.id}
          id={restaurant.id}
          removeFromList={this.props.removeFromList}
          name={restaurant.name}
          rating={restaurant.rating}
          image={restaurant.image_url}
          location={restaurant.location.display_address}
          phone={restaurant.display_phone}
          url={restaurant.url}
          selectedList={this.state.selectedList}
        />
      )
    })
    this.setState({ cardsToDisplay: cards })
  }

  updateList = (listName: string) => {
    this.setState({ selectedList: listName }, this.createCardsToDisplay)
  }

  render() {
    return (
      <div className='my-lists-container'>
        <section className='list-dropdown-container'>
          <p className='instructions'>
            Select a list to view.
          </p>
          <select className='list-dropdown'
            onChange={ event => this.updateList(event.target.value) }>
            <option value='gottaGo'>Gotta Go!</option>
            <option value='lovedIt'> Loved It!</option>
          </select>
          <button className='new-list-button'>
            <div className='plus'>
              <p>+</p>
            </div>
            <div className='new-list-text'>Add New List</div>
          </button>
        </section>
        <section className='listView'>
          { this.state.cardsToDisplay }
        </section>
      </div>
    )
  }
}

export default MyLists;