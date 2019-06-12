import React from 'react';

import './FriendForm.scss';

function FriendForm(props) {
  return (
    <div className='form-container'>
      <form onSubmit={props.addAFriend}>
        <label htmlFor='Name' />
        <input type='text' name='name' onChange={props.changeHandler} />
      </form>
    </div>
  );
}

export default FriendForm;
