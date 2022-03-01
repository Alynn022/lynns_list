import * as React from 'react';
import './styles/App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyLists from './Components/MyLists/MyLists';
import Error  from './Components/Error/Error';
import { getAllRestaurants } from './apiCalls';
import { Restaurant, UserLists } from './types';
import { Route } from 'react-router-dom';

interface State {
  restaurants: Restaurant[];
  userLists: UserLists;
  error: string;
}

interface Props {}

class App extends React.Component<Props, State> {
 state: State = {
   restaurants: [],
   userLists: {
     'gottago': {
       displayName: 'Gotta Go',
       restaurants: []
      },
      'lovedit': {
        displayName: 'Loved It',
        restaurants: []
      }
   },
   error: ''
  }

  componentDidMount = () => {
    getAllRestaurants()
    .then(data => this.setState({ restaurants: data}))
    .catch(error => this.handleError(error))
  }

  handleError = (err: string) => {
    this.setState({error: err});
  }

  addToList = (listName: string, id: string): void => {
    const newRestaurant = this.state.restaurants.find(restaurant => restaurant.id === id);
    
    if (newRestaurant && !this.state.userLists[listName].restaurants.includes(newRestaurant)) {
      this.setState({
        userLists: {
          ...this.state.userLists,
          [listName]: {
            ...this.state.userLists[listName],
            restaurants: [...this.state.userLists[listName].restaurants, newRestaurant]
          }
        }
      });
    } 
  }

  removeFromList = (listName: string, id: string): void => {
    const updatedList = this.state.userLists[listName].restaurants.filter(restaurant => restaurant.id !== id);
    this.setState({
      userLists: {
        ...this.state.userLists,
        [listName]: {
          ...this.state.userLists[listName],
          restaurants: updatedList
        }   
      }
    });
  }

  addRestaurants = (data: Restaurant[]): void => {
    this.setState(prevState => ({
      restaurants: prevState.restaurants.concat(data)
    }));
  }

  createNewList = (newListName: string): void => {
    const key = newListName.replace(' ', '').toLowerCase();
    const currentKeys = Object.keys(this.state.userLists)
    let checkList = false 
    
    currentKeys.forEach(list => {
      if (list === newListName) {
        checkList = true 
      }
    });
    
    if (!checkList) {
      this.setState ({ 
        userLists: {
          ...this.state.userLists,
          [key]: {
            displayName: newListName,
            restaurants: []
          }
        }
      });
    }
  }
  
  render() {
    const displayError = this.state.error && <Error error={this.state.error}/>

    const myListsRoute = <Route
      exact path="/:selectedList"
      render={({ match }) => {
        if (Object.keys(this.state.userLists).includes(match.params.selectedList)) {
          return (
            <MyLists
              userLists={this.state.userLists}
              removeFromList={this.removeFromList}
              selectedList={match.params.selectedList}
              createNewList={this.createNewList}
            />
          );
        } else {
          return (
            <Error error={'Sorry! Looks like that page does not exist.'} />
          );
        }
      }}
    /> 
    
    return (
      <div className="App">
        <Header />
        { displayError }
        { myListsRoute }
        <Route exact path="/" render={() => 
          <Home
            restaurants={this.state.restaurants}
            addToList={this.addToList}
            addRestaurants={this.addRestaurants}
            handleError ={this.handleError}
            userLists={this.state.userLists}
            error={this.state.error}
          />}
        />
      </div>
    );
  }
}

export default App;
