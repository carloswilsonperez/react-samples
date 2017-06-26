import React, { Component } from 'react';
import '../App.css';

class ContactParams extends Component {
  render() {
    return (
      <div className="App">
        <h1>Thank You {this.props.params.userName}!</h1>
        Your message has been sent with ID #{this.props.params.id}.
      </div>
    );
  }
}

export default ContactParams;
