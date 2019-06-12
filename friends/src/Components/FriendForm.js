import React from 'react';
import axios from 'axios';

import './FriendForm.scss';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
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

  addFriend = e => {
    console.log(e);
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.addFriend}>
          <input type='text' />
        </form>
      </div>
    );
  }
}
