import React from 'react';
import logo from './logo.png';
import './Body.css';

function Body() {
  return (
    <div className="Body">
      <header className="Body-header">
        <img src={logo} className="Body-logo" alt="logo" />
        <p>
          Welcome to The Techno Creatives recruitment assignment.<br/> You got it spinning. Nice. 
        </p>
        Now:
        <a
          className="Body-link"
          href="/assignment"
        >
          Click here for the assignment
        </a>
      </header>
    </div>
  );
}

export default Body;
