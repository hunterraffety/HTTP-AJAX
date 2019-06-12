import React from 'react';
import { Route, NavLink } from 'react-router-dom';

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
    <div className='home-container'>
      <div className='home-content'>
        <h1>{thechosen.name}</h1>
      </div>
    </div>
  );
}

export default Friend;
