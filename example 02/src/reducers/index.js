/**
 * Created by carlos wilson on 6/29/2017.
 */
import { combineReducers } from 'redux';
import itemReducer from './reducers.js';

const rootReducer = combineReducers({
  //Al reducers we are wanting to combine
  itemReducer
});

export default rootReducer;
