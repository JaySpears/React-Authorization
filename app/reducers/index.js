import { combineReducers } from 'redux';
import tasksReducer from './reducer-tasks.js';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default rootReducer;
