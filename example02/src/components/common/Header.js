import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Header extends Component {
  render () {
    return (
      <div className="App-header">
          <h1>React Router Tutorial</h1>
          <ul role="nav">
            <li><Link to="/home" activeStyle={{ color: 'red' }}>Home</Link></li>
            <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
            <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
          </ul>
      </div>
  );
  }
}

export default Header;
