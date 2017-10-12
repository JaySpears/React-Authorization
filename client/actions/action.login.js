/**
 * function setLoginPending, action for login
 * form submission.
 *
 * @param {Boolean} bool
 */
export function setLoginPending(bool) {
  return {
    type: 'SET_LOGIN_PENDING',
    isLoginPending: bool
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
 * function login, main action for sending user information
 * to the api. This will hit the /users/login route with
 * a POST method.
 *
 * @param  {String} username
 * @param  {String} password
 */
export function login(email, password) {
  return (dispatch) => {
    dispatch(setLoginPending(true));
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        passowrd: password
      })
    }).then(function(){
      console.log('user created');
    })
  }
}
