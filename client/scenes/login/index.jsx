// Import dependencies.
import React, { Component } from 'react';
import { login, create } from '../../actions/action.user';
import { resetRequestReducers } from '../../actions/action.request-handling';
import { setUsersAuthorization, checkUserAuthorization } from '../../actions/action.auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import LoginForm from './components/form/index';

// LoginScene Component.
class LoginScene extends React.Component{
  constructor(props){
    super(props);
    // Initial state of the component.
    this.state = {
      userCreatingAccount: false,
      formSubmitted: false,
      isFormValid: false,
      hasUserToggledView: false,
      rememberUser: false,
      formValues: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      },
      errors:{
        email: {},
        password: {},
        firstName: {},
        lastName: {}
      }
    };
    // Component methods.
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.assignFormErrors = this.assignFormErrors.bind(this);
    this.resetLoginView = this.resetLoginView.bind(this);
  }

  /**
   * componentWillMount, lifecycle method
   * for when component updates. Checking the users
   * authorization. If they are currently authorized,
   * redirecting them to the main page of the application.
   *
   * @param  {Object} nextProps [description]
   */
  componentWillMount(){
    const usersToken = localStorage.getItem('token');
    if (usersToken !== null) {
      this.props.checkUserAuthorization(usersToken);
    }
  }

  /**
   * componentWillReceiveProps, updating
   * component method. Checking to see if
   * the users account becomes authorized
   * via login or account creation.
   *
   * @param  {Object} nextProps [description]
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthorized) {
      this.props.setUsersAuthorization(true);
    }
  }

  /**
   * componentWillUpdate, updating
   * component method. Checks if form is
   * valid, then allowing the user to create
   * an account or login.
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
        let requestObject = {
          email: this.state.formValues.email,
          password: this.state.formValues.password,
          firstName: this.state.formValues.firstName,
          lastName: this.state.formValues.lastName
        };
        this.props.create(requestObject, 'create');
      } else {
        let requestObject = {
          email: this.state.formValues.email,
          password: this.state.formValues.password,
          rememberUser: this.state.rememberUser
        };
        this.props.login(requestObject, 'login');
      }
    }
  }

  /**
   * handleInputChange, updates state reference for each
   * input field value on change. Once state is updated,
   * the form will be validated on the fly.
   *
   * @param  {Object} event
   */
  handleInputChange(event){
    event.preventDefault();
    this.setState({
      formValues: Object.assign(this.state.formValues, {
        [event.target.name]: event.target.value
      })
    }, this.validateForm);
  }

  /**
   * handleCheckboxChange, updates state reference
   * checkboxes.
   *
   * @param  {Object} event
   */
  handleCheckboxChange(event){
    this.setState({
      rememberUser: event.target.checked
    });
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
   * toggleLoginView, updates state for when users
   * try to create a new account.
   *
   * @param  {Object} event
   */
  toggleLoginView(event){
    event.preventDefault();
    this.props.resetRequestReducers();
    if (this.state.userCreatingAccount) {
      this.resetLoginView(false);
    } else {
      this.resetLoginView(true);
    }
  }

  /**
   * resetLoginView, resets erros and updates state
   * for login view.
   *
   * @param {Boolean} userCreatingAccount
   */
  resetLoginView(userCreatingAccount){
    this.setState({
      userCreatingAccount: userCreatingAccount,
      hasUserToggledView: true,
      formValues: Object.assign(this.state.formValues, {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }),
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
          if (this.state.formValues[inputField].length === 0) {
            if (this.state.userCreatingAccount) {
              this.assignFormErrors(inputField, 'required');
            } else if(inputField !== 'firstName' && inputField !== 'lastName'){
              this.assignFormErrors(inputField, 'required');
            }
          } else if (this.state.formValues[inputField].length > 0 && inputField === 'email') {
            if (!/^((?!.*\.\.)[a-z0-9\.\-]+[^\.]@[a-z0-9\-]+(?:\.[a-z]+)+)$/mgi.test(
              this.state.formValues[inputField]
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
        { this.props.isAuthorized ?
        <Redirect to='/main'/> :
        <LoginForm
          hasFormBeenSubmitted={this.state.formSubmitted}
          hasUserToggledView={this.state.hasUserToggledView}
          handleFormSubmission={this.handleFormSubmission}
          handleInputChange={this.handleInputChange}
          handleCheckboxChange={this.handleCheckboxChange}
          rememberUser={this.state.rememberUser}
          toggleLoginView={this.toggleLoginView}
          userCreatingAccount={this.state.userCreatingAccount}
          setAxiosRequestPending={this.props.setAxiosRequestPending}
          setAxiosRequestSuccess={this.props.setAxiosRequestSuccess}
          setAxiosRequestError={this.props.setAxiosRequestError}
          formValues={this.state.formValues}
          errors={this.state.errors}>
        </LoginForm> }
      </div>
    );
  }
}

// State fromm the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    setAxiosRequestPending: state.requestHandlingReducer.setAxiosRequestPending,
    setAxiosRequestSuccess: state.requestHandlingReducer.setAxiosRequestSuccess,
    setAxiosRequestError: state.requestHandlingReducer.setAxiosRequestError,
    isAuthorized: state.authorizationReducer.isAuthorized
  };
}

// Binding action functions with redux's
// dispatch to this components props.
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    create: (username, password, firstName, lastName) => {
      dispatch(create(username, password, firstName, lastName));
    },
    resetRequestReducers: () => {
      dispatch(resetRequestReducers());
    },
    setUsersAuthorization: (bool) => {
      dispatch(setUsersAuthorization(bool));
    },
    checkUserAuthorization: (token) => {
      dispatch(checkUserAuthorization(token));
    }
  }
}

// Export scene.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScene);
