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

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.assignFormErrors = this.assignFormErrors.bind(this);
  }

    /**
     * componentWillUpdate, built in react method
     * for when component updates.
     *
     * @param  {Object} prevProps [description]
     * @param  {Object} prevState [description]
     */
    componentDidUpdate(prevProps, prevState) {
      if (
        prevState.isFormValid &&
        this.state.formSubmitted &&
        this.state.isFormValid &&
        !this.props.setAxiosRequestPending
      ) {
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
   * validateForm, error handling for
   * dynamic form input fields. Resets state errors
   * on exection, then updates state via callback.
   */
  validateForm(){
    this.setState({
      isFormValid: true,
      formSubmitted: false,
      errors: Object.assign(this.state.errors, {
        email: {},
        password: {},
        firstName: {},
        lastName: {}
      })
    }, () => {
      for (var inputField in this.state.errors) {
        if (this.state.errors.hasOwnProperty(inputField)) {
          if (this.state[inputField].length === 0) {
            if (
              !this.state.userCreatingAccount &&
              inputField !== 'firstName' &&
              inputField !== 'lastName'
            ) {
              this.assignFormErrors(inputField, 'required');
            } else {
              this.assignFormErrors(inputField, 'required');
            }
          } else if (this.state[inputField].length > 0 && inputField === 'email') {
            if (!/^((?!.*\.\.)[a-z0-9\.\-]+[^\.]@[a-z0-9\-]+(?:\.[a-z]+)+)$/mgi.test(
              this.state[inputField]
            )) {
              this.assignFormErrors(inputField, 'invalid');
            }
          }
        }
      }
    });
  }

  /**
   * assignFormErrors, function to set error state
   * for input field passed.
   *
   * @param  {String} inputField
   * @param  {String} errorType
   */
  assignFormErrors(inputField, errorType){
    this.setState({
      isFormValid: false,
      errors: Object.assign(this.state.errors, {
        [inputField]: {
          [errorType]: true
        }
      })
    });
  }

  render(){
    return(
      <div>
        <LoginForm
          hasFormBeenSubmitted={this.state.formSubmitted}
          handleFormSubmission={this.handleFormSubmission}
          handleChange={this.handleChange}
          handleCreateAccount={this.handleCreateAccount}
          userCreatingAccount={this.state.userCreatingAccount}
          setAxiosRequestPending={this.props.setAxiosRequestPending}
          setAxiosRequestSuccess={this.props.setAxiosRequestSuccess}
          setAxiosRequestError={this.props.setAxiosRequestError}
          errors={this.state.errors}>
        </LoginForm>
      </div>
    );
  }
}

// State fromm the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    setAxiosRequestPending: state.loginReducer.setAxiosRequestPending,
    setAxiosRequestSuccess: state.loginReducer.setAxiosRequestSuccess,
    setAxiosRequestError: state.loginReducer.setAxiosRequestError
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
