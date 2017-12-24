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
 * function setUsersAuthorization, updates state for
 * users authorization.
 *
 * @param {Boolean} bool
 */
export function setUsersAuthorization(bool) {
  return (dispatch) => {
    dispatch(isAuthorized(bool));
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
  return (dispatch) => {
    axios.post('/user/authorize', {
      token: token
    }).then((response) => {
      dispatch(isAuthorized(true));
    }).catch((e) => {
      dispatch(isAuthorized(false));
    });
  }
}
