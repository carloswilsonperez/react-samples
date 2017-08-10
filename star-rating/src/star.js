import React from 'react';
import 'babel-polyfill';
import './index.css';

const Star = (props) =>
  <div className={(props.selected) ? 'star selected' : 'star'}
      onClick={props.callBack}>
  </div>;

export default Star;