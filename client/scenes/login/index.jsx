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
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    
    // Bind methods.
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * handleLogin, submission method for user
   * account login. Dispatches the login action.
   *
   * @param  {Object} event
   */
  handleLogin(event) {
    event.preventDefault();
    this.props.login(
      this.state.email,
      this.state.password
    );
  }

  /**
   * handleChange, updates state reference for each
   * input field value on change.
   *
   * @param  {Object} event
   */
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          handleErrors={this.handleErrors}
          userCeatingAccount={this.props.setUserCreatingAccount}>
        </LoginForm>
      </div>
    );
  }
}

// State fromm the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    setLoginSuccess: state.loginReducer.setLoginSuccess,
    setLoginError: state.loginReducer.setLoginError,
    setUserCreatingAccount: state.loginReducer.setUserCreatingAccount
  };
}

// Binding action functions with redux's
// dispatch to this components props.
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  }
}

// Export scene.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScene);
