import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Game from './Game';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
