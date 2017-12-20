const initialState = {
  setAxiosRequestPending: false,
  setAxiosRequestSuccess: false,
  setAxiosRequestError: false
};

/**
 * function requestHandlingReducer, reducer switch statement
 * for request action options.
 *
 * @param  {Object} state
 * @param  {Object} action
 */
function requestHandlingReducer(state = initialState, action){
  switch (action.type) {
    case 'AXIOUS_REQUEST_PENDING' : {
      return Object.assign({}, state, {
        setAxiosRequestPending: action.setAxiosRequestPending
      });
    }
    case 'SET_AXIOS_REQUEST_SUCCESS' : {
      return Object.assign({}, state, {
        setAxiosRequestSuccess: action.setAxiosRequestSuccess
      });
    }
    case 'SET_AXIOS_REQUEST_ERROR' : {
      return Object.assign({}, state, {
        setAxiosRequestError: action.setAxiosRequestError
      });
    }
    default:
      return state
  }
}

export default requestHandlingReducer;
