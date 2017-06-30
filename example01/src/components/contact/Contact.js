import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import '../App.css';
import * as itemActions from '../../actions/actions';

class About extends Component {
  _goTo(event) {
    event.preventDefault();
    //Firing an action that Redux will handle
    this.props.dispatch(itemActions.createItem({
      name: this.name.value,
      id: this.id.value
    }));
    //Make Redirect to /userName/id
    //const path = `/${this.name.value}/${this.id.value}`;
    //browserHistory.push(path);
  }
  itemRow(item, index) {
    return <div key={index}>{item.name}</div>
  }
  render() {
    return (
      <div className="App">
        <h1>Contact</h1>
        {this.props.allItems.map(this.itemRow)}
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

function mapStateToProps(state, ownProps) {
  //The returned object contains the properties we would like to see
  //exposed on our component.
  return {
    allItems: state //Now we can access viw this.props.allItems within this component
  }
}

function mapDispatchToProps() {
  //Here you define the actions you want to expose on the component
}

export default connect(mapStateToProps)(About);

//Withoud the second optional param in Connect(),
//our component automatically gets a dispatch property attached to it
//via this.props.dispatch. So we are able to dispatch actions
