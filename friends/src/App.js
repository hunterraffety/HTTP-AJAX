// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

// components
import Friend from './Components/Friend';
import FriendsDisplay from './Components/FriendsDisplay';
import FriendForm from './Components/FriendForm';
import FriendUpdate from './Components/FriendUpdate';
import Home from './Components/Home';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
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
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({ activeFriend: friend }, () => {
      this.props.history.push('/update-form');
    });
  };

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friend) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <NavLink exact to='/' className='navlink'>
          <h1>Friend-O-Dex</h1>
        </NavLink>
        <span class='sub'>... like Rolodex...</span>
        <nav>
          <NavLink exact to='/' className='navlink'>
            Home
          </NavLink>
          <NavLink to='/friend-list' className='navlink'>
            Friends
          </NavLink>
          <NavLink to='/add-form' className='navlink'>
            Add Friend
          </NavLink>
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
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
              friends={this.state.friends}
            />
          )}
        />

        <Route
          exact
          path='/add-form'
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />

        <Route
          path='/update-form'
          render={props => (
            <FriendUpdate
              {...props}
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
