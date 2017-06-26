import React, { Component } from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Children routes */}
        {this.props.children}
      </div>
  );
  }
}

export default App;
