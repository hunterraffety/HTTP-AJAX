import React from 'react';
import axios from 'axios';

import './FriendForm.scss';

function FriendForm(props) {
  return (
    <div className='form-container'>
      <form onSubmit={props.addFriend}>
        <input type='text' />
      </form>
    </div>
  );
}

export default FriendForm;
