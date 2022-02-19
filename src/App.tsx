import * as React from 'react';
import './styles/App.scss';
import { getAllRestaurants } from './apiCalls'

interface Props {}

class App extends React.Component <Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    getAllRestaurants()
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
