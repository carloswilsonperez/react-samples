import React, { Component } from 'react';

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.whenSubmit(this.userInput.value);
    this.userInput.value = "";
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref={input => this.userInput = input} />
        <button type="submit">{this.props.buttonLabel}</button>
    </form>
  );
  }
}

export default Form;
