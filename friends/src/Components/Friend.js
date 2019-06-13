import React from 'react';

import './Friend.scss';

function Friend(props) {
  console.log(`props from friend:`, props);
  console.log(`props.friends from friend:`, props.friends);
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
    </div>
  );
}

export default Friend;
