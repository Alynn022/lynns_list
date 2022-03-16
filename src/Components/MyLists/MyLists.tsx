import * as React from 'react';
import './MyLists.scss';
import ListCard from '../RestaurantCards/ListCard';
import { UserLists } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  userLists: UserLists;
  removeFromList: (listName: string, id: string) => void;
  selectedList: string;
  createNewList: (newListName: string) => void;
}

interface State {
  cardsToDisplay: JSX.Element[], 
  selectedList: string,
  input: boolean,
  value: string
}

class MyLists extends React.Component<Props, State> {
  state: State = {
    cardsToDisplay: [],
    selectedList: this.props.selectedList,
    input: false,
    value: ''
  }

  componentDidMount = () => {
    this.createCardsToDisplay();
  }
 
  componentDidUpdate = () => {
    if (this.state.cardsToDisplay.length !== this.props.userLists[this.state.selectedList].restaurants.length) {
      this.createCardsToDisplay();
    }
  }

  createCardsToDisplay = () => {
    const cards = this.props.userLists[this.state.selectedList].restaurants.map(restaurant => {
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
      );
    });
    this.setState({ cardsToDisplay: cards });
  }

  updateList = (listName: string) => {
    this.setState({ selectedList: listName }, this.createCardsToDisplay);
  }

  showNewListInput = (): void => {
    this.setState(prevState => ({
      input: !prevState.input
    }))
  }

  getInput = (): void => {
    if (this.state.value) {
      this.props.createNewList(this.state.value);
      this.clearInput();
    }
  }

  clearInput = (): void => {
    this.setState({ value: '', input: false });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  }

  getListButtons = () => {
    const keys = Object.keys(this.props.userLists);
    return keys.map(key => {
      return (
        <Link
          key={key}
          to={`/${key}`}
          tabIndex={-1}
        >
          <button
            className='list-button'
            id={`${key}-list-button`}
            tabIndex={0}
            onClick={() => this.updateList(key)}
          >
            { this.props.userLists[key].displayName }
          </button>
        </Link>
      );
    });
  }

  render() {
    const inputField = this.state.input &&
      <div className='input-container'>
        <input
          className='list-input'
          maxLength={25}
          type='text'
          placeholder='max characters 25'
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
        <button
          className='submit'
          onClick={() => this.getInput()}
        >
          Create List
        </button>
      </div>

    const noListMessage = !this.state.cardsToDisplay.length &&
      <p className='no-restaurants-yet'>
        You currently have no restaurants saved to this list, please <a href='/'>return home</a> and make some selections.
      </p>
    
    return (
      <div className='my-lists-page'>
        <section className='my-lists-title'>
          <h2 className='selected-list' tabIndex={0}>
            Your "{this.props.userLists[this.state.selectedList].displayName}" List
          </h2>
          { noListMessage }
        </section>
        <section className='list-menu-container'>
          <section className='my-lists-button-container'>
            <article className='list-buttons-container'>
              <p className='instructions'>
                Select a list to view.
              </p>
              <div className='scroll-wrap'>
                { this.getListButtons() }
              </div>
            </article>
            <article className='new-list-container'>
              <button
                className='new-list-button'
                id='newList'
                onClick={() => this.showNewListInput()}
              >
                <div className='plus'>
                  <p>+</p>
                </div>
                <p className='new-list-text'>Add New List</p>
              </button>
              { inputField }
          </article>
          </section>
        </section>
        <section className='my-lists-container'>
          <section className='list-view'>
            { this.state.cardsToDisplay }
          </section>
        </section>
      </div>
    );
  }
}

export default MyLists;