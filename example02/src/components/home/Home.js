import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import AbilitiesList from './AbilitiesList';

class Home extends Component {
  constructor() {
    super();
    console.log("Starting...");
    this.state = {
      txt: "Enter Something",
      topics: ['HTML', 'ReactJS', 'AngularJS']
    };
  }
  updateLabel(data) {
    console.log(data);
    this.setState({
      topics: this.state.topics.concat(data)
    });
  }
  render() {
    return (
      <div className="App">
        <br />
        <Form whenSubmit={this.updateLabel.bind(this)} buttonLabel="Add items to List"/>
        <AbilitiesList data={this.state.topics} />
      </div>
    );
  }
}

export default Home;
