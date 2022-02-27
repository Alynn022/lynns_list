import * as React from 'react';
import './styles/App.scss';
import Header from './Components/Header/Header';
import MobileFooter from './Components/Footer/MobileFooter';
import DesktopFooter from './Components/Footer/DesktopFooter';
import Home from './Components/Home/Home';
import MyLists from './Components/MyLists/MyLists';
import { getAllRestaurants } from './apiCalls';
import { State } from './types';
import { Route } from 'react-router-dom';
import { Restaurant } from '../src/types';
import Error  from './Components/Error/Error'

// interface State {
//   restaurants: Restaurant[];
//   userLists: UserLists;
// }

interface Props {}

class App extends React.Component<Props, State> {
 state: State = {
   restaurants: [],
   userLists: {
     'My Favorites': []
   },
   error: ''
  }

  componentDidMount = () => {
    getAllRestaurants()
    .then(data => {
      this.setState({ restaurants: data.businesses})
    })
    .catch(error => {
      console.log(error)
      this.handleError(error)})
  }

  handleError = (err: string) => {
    this.setState({error: err})
  }

  addToList = (listName: string, id: string): void => {
    const newRestaurant = this.state.restaurants.find(restaurant => restaurant.id === id);
    if (newRestaurant && !this.state.userLists[listName].includes(newRestaurant)) {
    this.setState({
      userLists: {
        ...this.state.userLists,
        [listName]: [...this.state.userLists[listName], newRestaurant]
      }
    });
  } 
  }

  removeFromList = (listName: string, id: string): void => {
    const updatedList = this.state.userLists[listName].filter(restaurant => restaurant.id !== id);
    this.setState({
      userLists: {
        ...this.state.userLists,
        [listName]: updatedList
      }
    })
  }

  addRestaurants = (data: Restaurant[]): void => {
    this.setState(prevState => ({ restaurants: prevState.restaurants.concat(data) }))
  }

  createNewList = (newListName: string): void => {
    const lists = Object.keys(this.state.userLists)
    let checkList = false 
    lists.forEach(list => {
      if (list === newListName) {
        checkList = true 
      }
    })
    if (!checkList) {
      this.setState ({ 
        userLists: {
          ...this.state.userLists,
          [newListName]: []
        }
      })
    }
  }
  
  render() {
    const displayError = (this.state.error && <Error error={this.state.error}/>)
    return (
      <div className="App">
        <Header />
        {displayError}
        <Route exact path="/:selectedList" render={({match}) => 
          { console.log(match)
            return (
            <MyLists
            userLists={this.state.userLists}
            removeFromList={this.removeFromList}
            selectedList={match.params.selectedList}
            createNewList={this.createNewList}
          />)}
          } 
        /> 
        <Route exact path="/" render={() => 
          <Home
            restaurants={this.state.restaurants}
            addToList={this.addToList}
            addRestaurants={this.addRestaurants}
            handleError ={this.handleError}
            userLists={this.state.userLists}
          />
          }
        />
        <MobileFooter />
        <DesktopFooter />
      </div>
    );
  }
}

export default App;
