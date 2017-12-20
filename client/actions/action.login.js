import axios from 'axios';
import {
  setAxiosRequestPending,
  setAxiosRequestSuccess,
  setAxiosRequestError
} from './action.request-handling';


/**
 * function login, main action for sending user information
 * to the api. This will hit the /users/login route with
 * a POST method.
 *
 * @param  {String} username
 * @param  {String} password
 */
export function login(email, password, rememberUser) {
  return (dispatch) => {
    // Reset global state.
    dispatch(setAxiosRequestPending(true));
    dispatch(setAxiosRequestSuccess(false));
    dispatch(setAxiosRequestError(false));
    // Post axios
    axios.post('/users/login', {
      email: email,
      password: password,
      rememberUser: rememberUser
    }).then((response) => {
      // Set user JWT.
      localStorage.setItem('token', response.headers.token);
      // Set actions for form loader and form message.
      setTimeout(() => {
        dispatch(setAxiosRequestSuccess(true));
        dispatch(setAxiosRequestPending(false));
      }, 1500);
    }).catch((e) => {
      // Set actions for form loader and form message.
      setTimeout(() => {
        dispatch(setAxiosRequestError(true));
        dispatch(setAxiosRequestPending(false));
      }, 1500);
    });
  }
}

/**
 * function createUserAccount, main action for creating users.
 * This will hit the /users/create route with
 * a POST method.
 *
 * @param  {String} username
 * @param  {String} password
 * @param  {String} firstName
 * @param  {String} lastName
 */
export function createUserAccount(email, password, firstName, lastName){
  return (dispatch) => {
    // Reset global state.
    dispatch(setAxiosRequestPending(true));
    dispatch(setAxiosRequestSuccess(false));
    dispatch(setAxiosRequestError(false));
    axios.post('/users/create', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }).then((response) => {
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
}
