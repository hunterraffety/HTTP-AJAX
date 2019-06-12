import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function FriendsDisplay(props) {
  console.log(props);
  console.log(props.friends);
  return (
    <div className='friends-display'>
      {props.friends.map(friend => (
        <div className='friend-info'>
          <h1>{friend.name}</h1>
          <h1>{friend.age}</h1>
          <h1>{friend.email}</h1>
        </div>
      ))}
    </div>
  );
}

export default FriendsDisplay;
