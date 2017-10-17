import axios from 'axios';

/**
 * function setLoginPending, action for login
 * form submission.
 *
 * @param {Boolean} bool
 */
export function setLoginPending(bool) {
  return {
    type: 'SET_LOGIN_PENDING',
    setLoginPending: bool
  }
}

/**
 * function setLoginSuccess, action for login
 * form submission success.
 *
 * @param {Boolean} bool
 */
export function setLoginSuccess(bool) {
  return {
    type: 'SET_LOGIN_SUCCESS',
    setLoginSuccess: bool
  }
}

/**
 * function setLoginError, action for login
 * form submission error.
 *
 * @param {Boolean} bool
 */
export function setLoginError(bool) {
  return {
    type: 'SET_LOGIN_ERROR',
    setLoginError: bool
  }
}

/**
 * function setUserCreatingAccount, action for when
 * user tries to create a new account.
 *
 * @param {Boolean} bool
 */
export function setUserCreatingAccount(bool) {
  return {
    type: 'SET_USER_CREATING_ACCOUNT',
    setUserCreatingAccount: bool
  }
}

/**
 * function login, main action for sending user information
 * to the api. This will hit the /users/login route with
 * a POST method.
 *
 * @param  {String} username
 * @param  {String} password
 */
export function login(email, password) {
  return (dispatch) => {
    // Reset global state.
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(false));
    // Post axios
    axios.post('/users/login', {
      email: email,
      password: password
    }).then(function(response){
      // Set user JWT.
      localStorage.setItem('token', response.headers.token);
      // Set actions for form loader and form message.
      setTimeout(function () {
        dispatch(setLoginSuccess(true));
        dispatch(setLoginPending(false));
      }, 1500);
    }).catch(function(e){
      // Set actions for form loader and form message.
      setTimeout(function () {
        dispatch(setLoginError(true));
        dispatch(setLoginPending(false));
      }, 1500);
    });
  }
}
