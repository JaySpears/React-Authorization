import axios from 'axios';

/**
 * function setAxiosRequestPending, action for setting
 * authorization boolean for the application routes.
 *
 * @param {Boolean} bool
 */
export function isAuthorized(bool) {
  return {
    type: 'IS_AUTHORIZED',
    isAuthorized: bool
  }
}

/**
 * function checkUserAuthorization, returns boolean
 * if user is authorized by sending the users JWT token
 * to the api for decryption.
 *
 * @param {String} token, User's JWT token.
 */
export function checkUserAuthorization(token) {
  if (localStorage.getItem('token') === null) {
    return isAuthorized(false);
  }
  axios.post('/users/auth', {
    token: token
  }).then((response) => {

  }).catch((e) => {

  });
}
