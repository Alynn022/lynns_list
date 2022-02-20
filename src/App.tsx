import * as React from 'react';
import './styles/App.scss';
import { getAllRestaurants } from './apiCalls';
import Header from './Components/Header/Header';
import { State } from './types';


class App extends React.Component  {
 state: State = {
   restaurants: []
   }

  componentDidMount() {
    getAllRestaurants()
    .then(data => {
      console.log(data)
      this.setState({ restaurants: data.businesses})
      console.log(this.state)
    })
  }
  
  render() {
    const name = this.state.restaurants.length > 0 && <p>{this.state.restaurants[0].name}</p>

    return (
      <div className="App">
        {name}
        <Header />
      </div>
    );
  }
}

export default App;
