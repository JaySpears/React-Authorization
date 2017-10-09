import { combineReducers } from 'redux';
import loginReducer from './reducer.login';

// Combine all reducers.
const reducers = combineReducers({
  loginReducer
});

// Export root reducer for state initialization.
export default reducers;
