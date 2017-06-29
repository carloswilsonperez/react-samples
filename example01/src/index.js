import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import 'babel-polyfill';
// Import routing components
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
