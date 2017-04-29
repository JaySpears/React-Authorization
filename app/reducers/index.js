import { combineReducers } from 'redux';
import iterativeReducer from './timer.js';

const trackerApp = combineReducers({
  iterativeReducer
});

export default trackerApp
