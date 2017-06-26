import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import '../App.css';

class About extends Component {
  _goTo(event) {
    event.preventDefault();
    //Make Redirect to /userName/id
    const path = `/${this.name.value}/${this.id.value}`;
    browserHistory.push(path);
  }
  render() {
    return (
      <div className="App">
        <h1>Contact</h1>
        Please enter your Name/ID:<br />
        <form onSubmit={this._goTo.bind(this)}>
          <input type="text" ref={input => this.name = input} />
          <br />
          <input type="text" ref={input => this.id = input} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default About;
