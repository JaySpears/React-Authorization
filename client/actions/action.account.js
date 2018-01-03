import axios from 'axios';
import { isAuthorized } from './action.auth';
import {
  setAxiosRequestPending,
  setAxiosRequestSuccess,
  setAxiosRequestError
} from './action.request-handling';


/**
 * function create, main action for creating users.
 * This will hit the /users/create route with
 * a POST method.
 *
 * @param  {Object} credentials
 */
export function create(credentials){
  let endpoint = '/user/' + arguments[1];
  return (dispatch) => {
    postUserCredentials(dispatch, credentials, endpoint);
  }
}

/**
 * function login, main action for sending user information
 * to the api. This will hit the /users/login route with
 * a POST method.
 *
 * @param  {Object} credentials
 */
export function login(credentials) {
  let endpoint = '/user/' + arguments[1];
  return (dispatch) => {
    postUserCredentials(dispatch, credentials, endpoint);
  }
}

/**
 * function logout, deletes users token from
 * localStorage. Also sets uers authorization to false.
 */
export function logout() {
  // Remove user JWT.
  localStorage.removeItem('token');
  return (dispatch) => {
    // Set user authorization to false.
    dispatch(isAuthorized(false));
  }
}

/**
 * function postUserCredentials, sneds user credential information
 * to the API for account login or account creation.
 *
 * @param  {Function} dispatch
 * @param  {Object} credentials
 * @param  {String} postAPI
 */
function postUserCredentials(dispatch, credentials, endpoint) {
  // Reset global state.
  dispatch(setAxiosRequestPending(true));
  dispatch(setAxiosRequestSuccess(false));
  dispatch(setAxiosRequestError(false));
  axios.post(endpoint, credentials).then((response) => {
    // Set user JWT.
    localStorage.setItem('token', response.headers.token);
    setTimeout(() => {
      dispatch(setAxiosRequestPending(false));
      dispatch(setAxiosRequestSuccess(true));
    }, 1500);
  }).catch((e) => {
    // User email already exists.
    setTimeout(() => {
      dispatch(setAxiosRequestPending(false));
      dispatch(setAxiosRequestError(true));
    }, 1500);
  });
}
