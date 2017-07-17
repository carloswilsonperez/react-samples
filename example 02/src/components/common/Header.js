import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Header extends Component {
  render () {
    return (
      <div className="App-header">
          <h1>Small React App</h1>
          <ul role="nav" className="nav nav-pills">
            <li role="presentation">
              <Link to="/home" activeStyle={{ color: 'red' }}>Home</Link>
            </li>
            <li role="presentation">
              <Link to="/about" activeStyle={{ color: 'red' }}>About</Link>
            </li>
            <li role="presentation">
              <Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default Header;
