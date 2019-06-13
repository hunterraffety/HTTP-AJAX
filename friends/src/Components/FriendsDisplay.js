import React from 'react';
import { Route, NavLink } from 'react-router-dom';

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
            <h1>{friend.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendsDisplay;
