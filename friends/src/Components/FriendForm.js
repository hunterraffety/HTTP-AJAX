import React from 'react';

import './FriendForm.scss';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Add Friend Details</h1>
        <form onSubmit={this.addFriend}>
          <input
            name='name'
            onChange={this.handleChange}
            placeholder='Name'
            type='text'
            value={this.state.friend.name}
          />
          <input
            name='age'
            onChange={this.handleChange}
            placeholder='Age'
            type='number'
            value={this.state.friend.age}
          />
          <input
            name='email'
            onChange={this.handleChange}
            placeholder='Email'
            type='email'
            value={this.state.friend.email}
          />
          <button type='submit' className='btn'>
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
