import { combineReducers } from 'redux';
import authorizationReducer from './reducer.auth';
import requestHandlingReducer from './reducer.request-handling';

// Combine all reducers.
const reducers = combineReducers({
  authorizationReducer,
  requestHandlingReducer
});

// Export root reducer for state initialization.
export default reducers;
