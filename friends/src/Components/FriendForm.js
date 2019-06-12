import React from 'react';

import './FriendForm.scss';

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: 0,
      email: ''
    };
  }

  addAFriend = e => {
    e.preventDefault();
    console.log(e);
  };

  changeHandler = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.addAFriend}>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={this.changeHandler}
            value={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default FriendForm;
