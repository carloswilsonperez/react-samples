import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ContactParams from './components/contact/ContactParams';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          {/* make them children of `App` */}
          <IndexRoute component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact/:userName/:id" component={ContactParams} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
