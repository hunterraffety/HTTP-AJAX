import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Friend from './Friend';
import FriendForm from './FriendForm';

import './FriendsDisplay.scss';

function FriendsDisplay(props) {
  function routeToFriend(e, friend) {
    e.preventDefault();
    props.history.push(`/friend-list/${friend.id}`);
  }
  console.log(`props from friendsdisplay`, props);
  console.log(props.friends);
  return (
    <div className='friends-display'>
      {props.friends.map(friend => (
        <div className='friend-info'>
          <div
            onClick={e => routeToFriend(e, friend)}
            className='item-card'
            key={friend.id}
          >
            <h1>{friend.id}</h1>
            <h1>{friend.name}</h1>
            <h1>{friend.age}</h1>
            <h1>{friend.email}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendsDisplay;
