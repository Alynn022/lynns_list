import * as React from 'react';
import HomeCard from '../RestaurantCards/HomeCard';
import DesktopFooter from '../Footer/DesktopFooter';
import MobileFooter from '../Footer/MobileFooter';
import { Restaurant } from '../../types';
import { getAllRestaurants } from '../../apiCalls';
import { UserLists } from '../../types';
import './Home.scss';

interface Props {
  restaurants: Restaurant[];
  addToList: (listName: string, id: string) => void;
  addRestaurants: (data: Restaurant[]) => void;
  handleError: (error: string) => void;
  userLists: UserLists;
  error: string;
}

interface State {
  offset: number
}

class Home extends React.Component<Props, State> {
  state: State = {
      offset: 0
    }

  updateRestaurants = () => {
    getAllRestaurants(this.state.offset)
      .then(data => this.props.addRestaurants(data))
      .catch(error => {
        console.log(error);
        this.props.handleError(error.message)
      })
  }

  loadMoreResults = () => {
    this.setState(prevState => ({offset: prevState.offset + 50}), this.updateRestaurants);
  }

  render() {
    const restaurantCards = this.props.restaurants.map(restaurant => {
      return (
        <HomeCard
          key={restaurant.id}
          id={restaurant.id}
          addToList={this.props.addToList}
          name={restaurant.name}
          rating={restaurant.rating}
          image={restaurant.image_url}
          location={restaurant.location.display_address}
          phone={restaurant.display_phone}
          url={restaurant.url}
          userLists={this.props.userLists}
        />
      );
    });

    const loadMoreButton = !this.props.error && 
      <button
        className='load-more'
        onClick={() => this.loadMoreResults()}
      >
        Load More
      </button>

    return (
      <section className='home-page'>
        { restaurantCards }
        { loadMoreButton }
        <MobileFooter />
        <DesktopFooter />
      </section>
    );
  }
}

export default Home;