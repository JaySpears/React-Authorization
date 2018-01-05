// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import Loader from './../../../../components/loader/index';
import FormInput from './components/form-input/index';
import FormRemember from './components/form-remember/index';
import FormSubmit from './components/form-submit/index';
import FormMessages from './components/form-messages/index';
import FormAccountCreate from './components/form-account-create/index';
import FormAccountLogin from './components/form-account-login/index';
import history from './../../../../index';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasFormBeenSubmitted: false,
      userCreatingAccount: false,
      setAxiosRequestPending: false,
      setAxiosRequestSuccess: false,
      setAxiosRequestError: false,
      hasUserToggledView: false
    };
  }

  /**
   * function componentWillReceiveProps, built in react method.
   * Will execute when the properties insides retrieve new
   * values.
   *
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps){
    this.setState({
      userCreatingAccount: nextProps.userCreatingAccount || false,
      setAxiosRequestPending: nextProps.setAxiosRequestPending || false,
      setAxiosRequestSuccess: nextProps.setAxiosRequestSuccess || false,
      setAxiosRequestError: nextProps.setAxiosRequestError || false,
      hasUserToggledView: nextProps.hasUserToggledView || false
    });
    // Since request was successful, redirect to the main page.
    if (nextProps.setAxiosRequestSuccess) {
      // Showing the successful login message for 2 seconds.
      setTimeout(function () {
        history.push('/main');
      }, 1000);
    }
    if (this.props.hasFormBeenSubmitted) {
      this.setState({
        hasFormBeenSubmitted: true
      });
    }
  }

  render(){
    return(
      <div className="form-wrapper">
        <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.props.handleFormSubmission}>
          {this.state.setAxiosRequestPending ? <Loader></Loader> : '' }
          <div className="align-wrapper">
            <div className="align-middle">
              <fieldset>
                <legend>Form Title</legend>

                <div className="email-password-wrapper clearfix">
                  <FormInput
                    labelFor="email"
                    labelText="Email"
                    inputType="text"
                    inputName="email"
                    errors={this.props.errors}
                    handleInputChange={this.props.handleInputChange}
                    formValues={this.props.formValues}
                    hasFormBeenSubmitted={this.state.hasFormBeenSubmitted}>
                  </FormInput>
                  <FormInput
                    labelFor="password"
                    labelText="Password"
                    inputType="password"
                    inputName="password"
                    errors={this.props.errors}
                    handleInputChange={this.props.handleInputChange}
                    formValues={this.props.formValues}
                    hasFormBeenSubmitted={this.state.hasFormBeenSubmitted}>
                  </FormInput>
                </div>

                <FormAccountLogin
                  opacityClass={(this.state.userCreatingAccount ? 'show-opacity' : 'hide-opacity')}
                  toggleLoginView={this.props.toggleLoginView}>
                </FormAccountLogin>

                <div className={(this.state.hasUserToggledView ? 'create' : 'create-initial') + (this.state.userCreatingAccount ? ' slide-left' : ' slide-right')}>
                  <div className="name-wrapper clearfix">
                    <FormInput
                      labelFor="first_name"
                      labelText="First Name"
                      inputType="text"
                      inputName="firstName"
                      errors={this.props.errors}
                      formValues={this.props.formValues}
                      handleInputChange={this.props.handleInputChange}
                      hasFormBeenSubmitted={this.state.hasFormBeenSubmitted}
                      tabIndex={(this.state.userCreatingAccount ? '' : '-1')}>
                    </FormInput>
                    <FormInput
                      labelFor="last_name"
                      labelText="Last Name"
                      inputType="text"
                      inputName="lastName"
                      errors={this.props.errors}
                      formValues={this.props.formValues}
                      handleInputChange={this.props.handleInputChange}
                      hasFormBeenSubmitted={this.state.hasFormBeenSubmitted}
                      tabIndex={(this.state.userCreatingAccount ? '' : '-1')}>
                    </FormInput>
                  </div>
                  <FormSubmit buttonText={'Create'}
                    tabIndex={(this.state.userCreatingAccount ? '' : '-1')}>
                  </FormSubmit>
                </div>

                <div className={(this.state.hasUserToggledView ? 'login' : 'login-initial') + (this.state.userCreatingAccount ? ' slide-left' : ' slide-right')}>
                  <FormRemember
                    rememberUser={this.props.rememberUser}
                    handleCheckboxChange={this.props.handleCheckboxChange}>
                  </FormRemember>
                  <FormSubmit buttonText={'Login'}></FormSubmit>
                  <FormAccountCreate toggleLoginView={this.props.toggleLoginView}></FormAccountCreate>
                </div>

                <FormMessages
                  userCreatingAccount={this.state.userCreatingAccount}
                  success={this.state.setAxiosRequestSuccess}
                  error={this.state.setAxiosRequestError}>
                </FormMessages>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// Export scene.
export default LoginForm;
