// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// components
import FriendsDisplay from './Components/FriendsDisplay';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <h1>Check yo friends, dude.</h1>
          <div className='go'>
            <NavLink exact to='/'>
              Home
            </NavLink>
            <NavLink to='/friends'>Chack'em</NavLink>
          </div>
        </nav>

        <Route
          path='/friends'
          render={props => (
            <FriendsDisplay {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;