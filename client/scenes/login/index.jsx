// Import dependencies.
import React, { Component } from 'react';
import { login, createUserAccount } from '../../actions/action.login';
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
      formSubmitted: false,
      isFormValid: false,
      userCreatingAccount: false,
      errors:{
        email: {},
        password: {},
        firstName: {},
        lastName: {}
      }
    };

    // Bind methods.
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  /**
   * handleFormSubmission, submission method for user
   * account login. Dispatches the login action.
   *
   * @param  {Object} event
   */
  handleFormSubmission(event) {
    event.preventDefault();
    this.setState({
      formSubmitted: true
    },() => {
      this.validateForm();
      if (this.state.isFormValid) {
        if (this.state.userCreatingAccount) {
          this.props.createUserAccount(
            this.state.email,
            this.state.password,
            this.state.firstName,
            this.state.lastName
          )
        } else {
          this.props.login(
            this.state.email,
            this.state.password
          );
        }
      }

    });
  }

  /**
   * handleCreateAccount, updates state for when users
   * try to create a new account.
   *
   * @param  {Object} event
   */
  handleCreateAccount(event){
    event.preventDefault();
    this.setState({
      userCreatingAccount: true,
      errors: Object.assign(this.state.errors, {
        email: {},
        password: {},
        firstName: {},
        lastName: {}
      })
    });
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
    // Validate input fiels on change now since
    // the form was submitted.
    if (this.state.formSubmitted) {
      this.setState({
        [event.target.name]: event.target.value
      }, this.validateForm);
    } else {
      this.setState({
        [event.target.name]: event.target.value
      }, this.validateForm);
    }
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
        password: {},
        firstName: {},
        lastName: {}
      })
    }, () => {
      if (this.state.formSubmitted) {
        // Iterate over input fields, if length is 0
        // set an error via the state name.
        for (var inputField in this.state.errors) {
          if (this.state.errors.hasOwnProperty(inputField)) {
            if (inputField !== 'email') {
              if (!this.state.userCreatingAccount) {
                if (inputField !== 'firstName' && inputField !== 'lastName') {
                  if (this.state[inputField].length === 0) {
                    this.setState({
                      isFormValid: false,
                      errors: Object.assign(this.state.errors, {
                        [inputField]: {
                          required: true
                        }
                      })
                    });
                  }
                }
              } else {
                if (this.state[inputField].length === 0) {
                  this.setState({
                    isFormValid: false,
                    errors: Object.assign(this.state.errors, {
                      [inputField]: {
                        required: true
                      }
                    })
                  });
                }
              }
            } else {
              // Email validation.
              if (this.state[inputField].length === 0) {
                this.setState({
                  isFormValid: false,
                  errors: Object.assign(this.state.errors, {
                    [inputField]: {
                      required: true
                    }
                  })
                });
              } else if (!/^((?!.*\.\.)[a-z0-9\.\-]+[^\.]@[a-z0-9\-]+(?:\.[a-z]+)+)$/mgi.test(
                this.state[inputField]
              )) {
                this.setState({
                  isFormValid: false,
                  errors: Object.assign(this.state.errors, {
                    [inputField]: {
                      invalid: true
                    }
                  })
                });
              }
            }
          }
        }
      }
    });
  }

  render(){
    return(
      <div>
        <LoginForm
          handleFormSubmission={this.handleFormSubmission}
          handleChange={this.handleChange}
          errors={this.state.errors}
          handleCreateAccount={this.handleCreateAccount}
          userCreatingAccount={this.state.userCreatingAccount}
          setLoginPending={this.props.setLoginPending}
          setLoginSuccess={this.props.setLoginSuccess}
          setLoginError={this.props.setLoginError}
          setCreateUserAccountPending={this.props.setCreateUserAccountPending}
          setCreateUserAccountSuccess={this.props.setCreateUserAccountSuccess}
          setCreateUserAccountError={this.props.setCreateUserAccountError}>
        </LoginForm>
      </div>
    );
  }
}

// State fromm the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    setLoginPending: state.loginReducer.setLoginPending,
    setLoginSuccess: state.loginReducer.setLoginSuccess,
    setLoginError: state.loginReducer.setLoginError,
    setCreateUserAccountPending: state.loginReducer.setCreateUserAccountPending,
    setCreateUserAccountSuccess: state.loginReducer.setCreateUserAccountSuccess,
    setCreateUserAccountError: state.loginReducer.setCreateUserAccountError
  };
}

// Binding action functions with redux's
// dispatch to this components props.
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    createUserAccount: (username, password, firstName, lastName) => {
      dispatch(createUserAccount(username, password, firstName, lastName));
    }
  }
}

// Export scene.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScene);
