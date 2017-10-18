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
 * function setCreateUserAccountPending, action for user account
 * creation form submission.
 *
 * @param {Boolean} bool
 */
export function setCreateUserAccountPending(bool) {
  return {
    type: 'SET_CREATE_USER_ACCOUNT_PENDING',
    setCreateUserAccountPending: bool
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
 * function setCreateUserAccountSuccess, action for user account
 * creation form submission success.
 *
 * @param {Boolean} bool
 */
export function setCreateUserAccountSuccess(bool) {
  return {
    type: 'SET_CREATE_USER_ACCOUNT_SUCCESS',
    setCreateUserAccountSuccess: bool
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
 * function setCreateUserAccountError, action for user account
 * creation form submission error.
 *
 * @param {Boolean} bool
 */
export function setCreateUserAccountError(bool) {
  return {
    type: 'SET_CREATE_USER_ACCOUNT_ERROR',
    setCreateUserAccountError: bool
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
    }).then((response) => {
      // Set user JWT.
      localStorage.setItem('token', response.headers.token);
      // Set actions for form loader and form message.
      setTimeout(() => {
        dispatch(setLoginSuccess(true));
        dispatch(setLoginPending(false));
      }, 1500);
    }).catch((e) => {
      // Set actions for form loader and form message.
      setTimeout(() => {
        dispatch(setLoginError(true));
        dispatch(setLoginPending(false));
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
    console.log('user account action');
    // Reset global state.
    dispatch(setCreateUserAccountPending(true));
    dispatch(setCreateUserAccountSuccess(false));
    dispatch(setCreateUserAccountError(false));
    axios.post('/users/create', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }).then(() => {
      setTimeout(() => {
        dispatch(setCreateUserAccountPending(false));
      }, 1500);
    }).catch(() => {
      setTimeout(() => {
        dispatch(setCreateUserAccountPending(false));
      }, 1500);
    });
  }
}
