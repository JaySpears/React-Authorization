const initialState = {
  isLoginPending: false,
  setLoginSuccess: false,
  setLoginError: false,
  form: {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
};

/**
 * function loginReducer, reducer switch statement
 * for login action options.
 *
 * @param  {Object} state
 * @param  {Object} action
 */
function loginReducer(state = initialState, action){
  switch (action.type) {
    case 'SET_LOGIN_PENDING' : {
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });
    }
    case 'SET_LOGIN_SUCCESS' : {
      return Object.assign({}, state, {
        setLoginSuccess: action.setLoginSuccess
      });
    }
    case 'SET_LOGIN_ERROR' : {
      return Object.assign({}, state, {
        setLoginError: action.setLoginError
      });
    }
    default:
      return state
  }
}

export default loginReducer;
