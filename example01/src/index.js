import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import 'babel-polyfill';
// Import routing components
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';

//Creating instance of Store
const store = configureStore();

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));
registerServiceWorker();

//Now we are able to access our Redux Store in our components
