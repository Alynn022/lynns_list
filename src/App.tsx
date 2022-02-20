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
     lovedIt: []
   }
  }

  componentDidMount = () => {
    getAllRestaurants()
    .then(data => {
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

  removeFromList = (listName: string, id: string): void => {
    const updatedList = this.state.restaurants.filter(restaurant => restaurant.id !== id);
    this.setState({
      userLists: {
        ...this.state.userLists,
        [listName]: updatedList
      }
    })
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        <Home
          restaurants={this.state.restaurants}
          addToList={this.addToList}
        />
        {/* {<MyLists
          userLists={this.state.userLists}
          removeFromList={this.removeFromList}
        />} */}
      </div>
    );
  }
}

export default App;
