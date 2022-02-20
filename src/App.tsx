import * as React from 'react';
import './styles/App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyLists from './Components/MyLists/MyLists';
import { getAllRestaurants } from './apiCalls';
import { State } from './types';


class App extends React.Component {
 state: State = {
   restaurants: [],
   userLists: {
     gottaGo: [],
     wannaTry: []
   }
  }

  componentDidMount = () => {
    getAllRestaurants()
    .then(data => {
      console.log(data);
      this.setState({ restaurants: data.businesses});
      console.log(this.state);
    })
  }

  addToList = (listName: string, id: string): void => {
    const newRestaurant = this.state.restaurants.find(restaurant => restaurant.id === id);
    this.setState({
      userLists: {
        ...this.state.userLists,
        [listName]: [...[listName], newRestaurant]
      }
    });
  }
  
  render() {
    // const name = this.state.restaurants.length > 0 && <p>{this.state.restaurants[0].name}</p>
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        <Home
          restaurants={this.state.restaurants}
          addToList={this.addToList}
        />
        <MyLists
          restaurants={this.state.restaurants}
          userLists={this.state.userLists}
        />
      </div>
    );
  }
}

export default App;
