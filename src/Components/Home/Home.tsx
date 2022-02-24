import * as React from 'react';
import { Restaurant } from '../../types';
import HomeCard from '../RestaurantCards/HomeCard';
import { getAllRestaurants } from '../../apiCalls';
import './Home.scss';

interface Props {
  restaurants: Restaurant[];
  addToList: ((listName: string, id: string) => void)
  addRestaurants: (data: Restaurant[]) => void
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
      .then(data => this.props.addRestaurants(data.businesses))
  }

  loadMoreResults = () => {
    this.setState(prevState => ({offset: prevState.offset + 50}), this.updateRestaurants)
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
        />
      )
    })

    return (
      <section className='home-page'>
        {restaurantCards}
        <a className='load-more' onClick={() => this.loadMoreResults()}>Load More...</a>
      </section>
    )
  }
}

export default Home;