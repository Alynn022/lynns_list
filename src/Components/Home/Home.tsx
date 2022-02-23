import * as React from 'react';
import './Home.scss';
import { Restaurant } from '../../types';
import HomeCard from '../HomeCard/HomeCard';
import { getAllRestaurants } from '../../apiCalls';

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
          phone={restaurant.phone}
          url={restaurant.url}
        />
      )
    })

    return (
      <div className='home-container'>
        {restaurantCards}
        <button
          onClick={() => this.loadMoreResults()}
        >
          Load More Results
        </button>
      </div>
    )
  }
}

// const Home: React.FC<Props> = (props: Props) => {
//   const restaurantCards = props.restaurants.map(restaurant => {return (
//     <HomeCard 
//       key={restaurant.id}
//       id={restaurant.id}
//       addToList={props.addToList}
//       name={restaurant.name}
//       rating={restaurant.rating}
//       image={restaurant.image_url}
//       location={restaurant.location.display_address}
//       phone={restaurant.phone}
//       url={restaurant.url}
//     />
//   )})  
  
//   return (
//     <div>
//       { restaurantCards }
//       <button>

//       </button>
//     </div>
//     )
//   }

export default Home;