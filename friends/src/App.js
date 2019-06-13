// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// components
import Friend from './Components/Friend';
import FriendsDisplay from './Components/FriendsDisplay';
import FriendForm from './Components/FriendForm';
import Home from './Components/Home';

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

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <nav>
          <h1>Hey! Go check out your friends, friend.</h1>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <br />
          <NavLink to='/friend-list'>Here's a list of your buddies.</NavLink>
          <br />
          <NavLink to={`/add`}>Add an acquaintance.</NavLink>
          <br />
        </nav>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/friend-list'
          render={props => (
            <FriendsDisplay {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path='/friend-list/:id'
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
        <Route
          exact
          path='/add'
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
