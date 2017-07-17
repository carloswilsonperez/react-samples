import React, { Component } from 'react';

class AbilitiesList extends Component {
  render() {
    return (
        <p className="App-intro">
          You surely know about the following:  <br />
          {this.props.data.map((topic, index) => <li key={index}>{topic}</li>)}
        </p>
    );
  }
}

export default AbilitiesList;
