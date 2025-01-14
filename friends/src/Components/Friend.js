import React from 'react';

import './Friend.scss';

function Friend(props) {
  const thechosen = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );

  if (!props.friends.length || !thechosen) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='friend-container'>
      <div className='friend-content'>
        <h1>Name: {thechosen.name}</h1>
        <h1>Age: {thechosen.age}</h1>
        <h1>Email: {thechosen.email}</h1>
      </div>
      <button onClick={e => props.setUpdateForm(e, thechosen)} className='btn'>
        Update Friend
      </button>

      <button onClick={e => props.deleteFriend(e, thechosen)} className='btn'>
        Delete Friend
      </button>
    </div>
  );
}

export default Friend;
