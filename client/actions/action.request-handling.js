/**
 * function setAxiosRequestPending, action for request
 * object.
 *
 * @param {Boolean} bool
 */
export function setAxiosRequestPending(bool) {
  return {
    type: 'AXIOUS_REQUEST_PENDING',
    setAxiosRequestPending: bool
  }
}

/**
 * function setAxiosRequestSuccess, action for request
 * success.
 *
 * @param {Boolean} bool
 */
export function setAxiosRequestSuccess(bool) {
  return {
    type: 'SET_AXIOS_REQUEST_SUCCESS',
    setAxiosRequestSuccess: bool
  }
}

/**
 * function setAxiosRequestError, action for request
 * error.
 *
 * @param {Boolean} bool
 */
export function setAxiosRequestError(bool) {
  return {
    type: 'SET_AXIOS_REQUEST_ERROR',
    setAxiosRequestError: bool
  }
}

/**
 * function resetRequestReducers, reests all request
 * handlers.
 */
export function resetRequestReducers() {
  return (dispatch) => {
    dispatch(setAxiosRequestPending(false));
    dispatch(setAxiosRequestSuccess(false));
    dispatch(setAxiosRequestError(false));
  }
}
