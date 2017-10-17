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
      lastName: '',
      isFormValid: true,
      errors:{
        email: {},
        password: {}
      }
    };

    // Bind methods.
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  /**
   * handleLogin, submission method for user
   * account login. Dispatches the login action.
   *
   * @param  {Object} event
   */
  handleLogin(event) {
    event.preventDefault();
    if (this.state.isFormValid) {
      this.props.login(
        this.state.email,
        this.state.password
      );
    }

  }

  /**
   * handleChange, updates state reference for each
   * input field value on change. Once state is updated,
   * the form will be validated on the fly.
   *
   * @param  {Object} event
   */
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    }, this.validateForm);
  }

  /**
   * function validateForm, error handling for
   * dynamic form input fields. Resets state errors
   * on exection, then updates state via callback.
   */
  validateForm(){
    // Reset state.
    this.setState({
      isFormValid: true,
      errors: Object.assign(this.state.errors, {
        email: {},
        password: {}
      })
    }, () => {
      // Required/Invalid email test.
      if (this.state.email.length === 0) {
        this.setState({
          isFormValid: false,
          errors: Object.assign(this.state.errors, {
            email: {
              required: true
            }
          })
        });
      } else if (
        !/^((?!.*\.\.)[a-z0-9\.\-]+[^\.]@[a-z0-9\-]+(?:\.[a-z]+)+)$/mgi.test(this.state.email)
      ) {
        this.setState({
          isFormValid: false,
          errors: Object.assign(this.state.errors, {
            email: {
              invalid: true
            }
          })
        });
      }
      // Invalid password test.
      if (this.state.password.length === 0) {
        this.setState({
          isFormValid: false,
          errors: Object.assign(this.state.errors, {
            password: {
              required: true
            }
          })
        });
      }
    });
  }

  render(){
    return(
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          errors={this.state.errors}
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
