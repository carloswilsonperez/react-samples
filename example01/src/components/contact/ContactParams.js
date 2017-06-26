import React, { Component } from 'react';
import '../App.css';

class ContactParams extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome !</h1>
        You are {this.props.params.userName}, your ID is {this.props.params.id}
      </div>
    );
  }
}

export default ContactParams;
