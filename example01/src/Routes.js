import React, { Component } from 'react';
import {Route, Router} from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';

//let DefaultRoute = Router.DefaultRoute;
class Routes extends Component {
  render() {
    return (
      <div>
        <App>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </Router>
        </App>
      </div>
    );
  }
}

export default Routes;
