import * as React from 'react';
import './RestaurantCards.scss';
import yelp_icon_white from './yelp_icon_white.png';
import yelp_icon_black from './yelp_icon_black.png';
import { UserLists } from '../../types';

interface Props {
  id: string,
  addToList: ((listName: string, id: string) => void),
  name: string,
  rating: number,
  image: string,
  location: string[],
  phone: string,
  url: string,
  key: string
  userLists: UserLists
}

interface State {
  dropdownOpen: boolean
}

class HomeCard extends React.Component<Props, State> {
  state: State = {
    dropdownOpen: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.closeDropdown);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.closeDropdown);
  }

  displayAddress = (address: string[]) => {
    return address.map((element, index) => 
      <p key={index} className='address'>{element}</p>
    );
  }

  displayDropdown = () => {
    this.setState(prevState => ({ 
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  closeDropdown = () => {
    this.setState({ dropdownOpen: false });
  }

  handleClick = (key: string) => {
    this.props.addToList(key, this.props.id);
    this.displayDropdown();
  }

  populateDropdown = () => {
    const keys = Object.keys(this.props.userLists);
    return keys.map((key, index) => {
      return (
        <li
          className='dropdown-item'
          key={index}
          id={`${key}-id`}
          data-cy={key}
          tabIndex={0}
          onClick={() => this.handleClick(key)}
        >
          { this.props.userLists[key].displayName }
        </li>
      );
    });
  }

  render() {
    const dropDownList = this.state.dropdownOpen &&
      <ul id="myDropdown" className="dropdown-content">
        { this.populateDropdown() }
        <li className='dropdown-item'>
          <a href='/gottago/#newList'>Create A New List</a>
        </li>
      </ul>

    return (
      <section className='home-card'>
        <img
          className='thumbnail'
          src={this.props.image}
          alt={`${this.props.name}`}
          tabIndex={0}
        />
        <article className='restaurant-info'>
          <h2 className='name' tabIndex={0}>{this.props.name}</h2>
          <p className='rating' tabIndex={0}>Rating: {this.props.rating}</p>
          <p className='phone-number'>
            <a href={`tel:${this.props.phone}`} className='phone-link' aria-label='phone number'>{this.props.phone}</a>
          </p>
          <div className='address-container' tabIndex={0}>
            {this.displayAddress(this.props.location)}
          </div>
        </article>
        <article className='card-buttons'>
          <div className="dropdown">
            <button
              className="dropdown-btn"
              tabIndex={0}
              onClick={() => this.displayDropdown()}
            > 
              Add to List
              <i className="fa fa-chevron-down fa-flip-horizontal"></i>
            </button>
            { dropDownList }
          </div>
          <div className='yelp'>
            <a
              className='yelp-link'
              href={this.props.url}
              target='_blank'
              tabIndex={-1}
              rel='noreferrer'
            >
              <button className='more-info'>
                View On Yelp
                <img
                  src={yelp_icon_white}
                  alt='yelp icon'
                  className='yelp-logo-white'
                />
                <img
                  src={yelp_icon_black}
                  alt='yelp icon'
                  className='yelp-logo-black'
                />
              </button>
            </a>
          </div>
        </article>
      </section>
    );
  }
}

export default HomeCard;