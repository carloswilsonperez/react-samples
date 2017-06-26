import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import { Router, Route, hashHistory } from 'react-router'
import Routes from './Routes';
import App from './components/App';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ContactParams from './components/contact/ContactParams';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/:userName/:id" component={ContactParams} />
    </Route>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
