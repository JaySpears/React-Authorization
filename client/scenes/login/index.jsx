// Import dependencies.
import React, { Component } from 'react';
import { login } from '../../actions/action.login';
import { connect } from 'react-redux';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import LoginForm from './components/form/index';

class LoginScene extends React.Component{
  constructor(props){
    super(props);

    // Bind methods.
    this.handleLogin = this.handleLogin.bind(this);
  }

  /**
   * handleLogin, submission method for user
   * account login. Dispatches the login action.
   *
   * @param  {Object} event
   */
  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(
      this.props.email,
      this.props.password
    ));
  }

  render(){
    return(
      <div>
        <LoginForm submit={this.handleLogin}></LoginForm>
      </div>
    );
  }
}

// State form the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    setLoginSuccess: state.loginReducer.setLoginSuccess,
    setLoginError: state.loginReducer.setLoginError,
    form: {
      email: state.loginReducer.form.email,
      password: state.loginReducer.form.password,
      firstName: state.loginReducer.form.firstName,
      lastName: state.loginReducer.form.lastName
    }
  };
}

// Export scene.
export default connect(mapStateToProps)(LoginScene);
