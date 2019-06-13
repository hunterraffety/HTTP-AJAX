import React from 'react';

import './FriendUpdate.scss';

class FriendUpdate extends React.Component {
  state = {
    friend: this.props.activeFriend
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  handleChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  updateFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Hello. Need to update some information?</h1>
        <form onSubmit={this.updateFriend}>
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
            type='text'
            value={this.state.friend.email}
          />
          <button type='submit'>Update Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendUpdate;
