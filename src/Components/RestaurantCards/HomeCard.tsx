import * as React from 'react';
import './RestaurantCards.scss';
import yelp_icon_white from './yelp_icon_white.png';
import yelp_icon_black from './yelp_icon_black.png';
import Dropdown from '../Dropdown/AddToList';
import { UserLists } from '../../types';

// import AddToList from '../AddToListButton'
// import StarRatings from '../StarRatings/StarRatings';

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

  componentDidUpdate = () => {
    window.addEventListener('scroll', this.closeDropdown);
  }

  displayAddress = (address: string[]) => {
    return address.map((element, index) => 
      <p key={index} className='address'>{element}</p>
    )
  }

  displayDropdown = () => {
    this.setState(prevState => ({ 
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  closeDropdown = () => {
    this.setState({ dropdownOpen: false })
  }

  handleClick = (key: string) => {
    this.props.addToList(key, this.props.id);
    this.displayDropdown();
  }

  populateDropdown = () => {
    const keys = Object.keys(this.props.userLists)
    return keys.map((key, index) => {
      return(
        <a className='dropdown-item' key={index} onClick={() => this.handleClick(key)}>{this.props.userLists[key].displayName}</a>
      )
    })
  }

  render() {
    const dropDownList = this.state.dropdownOpen &&
      <div id="myDropdown" className="dropdown-content">
        {this.populateDropdown()}
      </div>

    return (
      <section className='home-card'>
        <img className='thumbnail' src={this.props.image} alt={`Photo of ${this.props.name}`} tabIndex={0}/>
        <article className='restaurant-info'>
        <h2 className='name' tabIndex={0}>{this.props.name}</h2>
          <p className='rating' tabIndex={0}>Rating: {this.props.rating}</p>
          {/* Don't delete, Jani is working on this ---> <StarRatings rating={props.rating} /> */}
          <p className='phone-number'>
            <a href='tel:{props.phone}' className='phone-link' aria-label='phone number'>{this.props.phone}</a>
          </p>
          <div className='address-container' tabIndex={0}>
            {this.displayAddress(this.props.location)}
            {/* {this.props.location} */}
          </div>
        </article>
        <article className='card-buttons'>
          
          {/* <Dropdown /> */}
          {/* <div className="dropdown"> */}
          <button
            className="dropdown-btn"
            onClick={ () => this.displayDropdown() }
          >Add to new list</button>
            {dropDownList}
          {/* </div> */}

          {/* <button aria-label='click here to add to Gotta Go List' className='gotta-go' id={this.props.id} onClick={(event) => 
            this.props.addToList('gottaGo', this.props.id)}>Gotta Go!
          </button>
          <button aria-label='click here to add to Loved It List' className='loved-it' id={this.props.id} onClick={(event) => 
            this.props.addToList('lovedIt', this.props.id)}>Loved It!
          </button> */}
          <a href={this.props.url} target='_blank' tabIndex={-1}>
            <button className='more-info'>View On Yelp
              <img src={yelp_icon_white} alt='visit yelp page' className='yelp-logo-white'/>
              <img src={yelp_icon_black} alt='visit yelp page' className='yelp-logo-black'/>
            </button>
          </a>
        </article>
      </section>
    )
  }
}

export default HomeCard;