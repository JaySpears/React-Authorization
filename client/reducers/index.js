import { combineReducers } from 'redux';
import authorizationReducer from './reducer.auth';
import requestHandlingReducer from './reducer.request-handling';
import userReducer from './reducer.user';

// Combine all reducers.
const reducers = combineReducers({
  authorizationReducer,
  requestHandlingReducer,
  userReducer
});

// Export root reducer for state initialization.
export default reducers;
