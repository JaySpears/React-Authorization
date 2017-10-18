const initialState = {
  setLoginPending: false,
  setLoginSuccess: false,
  setLoginError: false,
  setCreateUserAccountPending: false,
  setCreateUserAccountSuccess: false,
  setCreateUserAccountError: false
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
        setLoginPending: action.setLoginPending
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
    case 'SET_CREATE_USER_ACCOUNT_PENDING' : {
      return Object.assign({}, state, {
        setCreateUserAccountPending: action.setCreateUserAccountPending
      });
    }
    case 'SET_CREATE_USER_ACCOUNT_SUCCESS' : {
      return Object.assign({}, state, {
        setCreateUserAccountSuccess: action.setCreateUserAccountSuccess
      });
    }
    case 'SET_CREATE_USER_ACCOUNT_ERROR' : {
      return Object.assign({}, state, {
        setCreateUserAccountError: action.setCreateUserAccountError
      });
    }
    default:
      return state
  }
}

export default loginReducer;
