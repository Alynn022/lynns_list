import * as React from 'react';
import './styles/App.scss';
import { getAllRestaurants } from './apiCalls';
import Header from './Components/Header/Header';
import { Restaurant, State } from './types';


class App extends React.Component  {
 state: State = {
   restaurants: [1, 2, 3]
 }

  componentDidMount() {
    getAllRestaurants()
  }

  render() {
    return (
      <div className="App">
        { this.state.restaurants[0] }
        <Header />
      </div>
    );
  }
}

export default App;
