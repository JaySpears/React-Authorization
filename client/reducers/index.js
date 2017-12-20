import { combineReducers } from 'redux';
import requestHandlingReducer from './reducer.request-handling';

// Combine all reducers.
const reducers = combineReducers({
  requestHandlingReducer
});

// Export root reducer for state initialization.
export default reducers;
