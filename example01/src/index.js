import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
