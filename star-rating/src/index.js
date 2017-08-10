import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import StarRating from './StarRating';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StarRating totalStars={5} />, document.getElementById('root'));
registerServiceWorker();
