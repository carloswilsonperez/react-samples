import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppState from './AppState';
import App from './App';

//Separation of Concerns for the App:

// 1.- Observable States
const appState = new AppState();


// 2.- Components that react to it: App.jsx

ReactDOM.render(
  <AppContainer>
    <App store={appState}/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp appState={appState}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
