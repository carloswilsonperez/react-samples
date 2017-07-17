import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
// Import routing components
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {observable} from 'mobx';

class Counter extends Component {
  @observable count = 0;

  render() {
    return (
      <div>
        Counter: {this.count} <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );

  }

  handleInc = () => {
    this.count++;
  };

  handleDec = () => {
    this.count--;
  };
}

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
