import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Home.scss';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <p>
          Are you tired of not ever having contact information when you need it?
          I tell you what, I just can't imagine a better place to find it than
          launching a localhost server containing some data, and then creating,
          reading, updating, and deleting. That really tickles my belly!
        </p>
      </div>
    </div>
  );
}

export default Home;
