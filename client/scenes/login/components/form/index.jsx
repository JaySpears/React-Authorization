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
import FormCreate from './components/form-create/index';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formSubmitted: false,
      userCreatingAccount: false,
      setAxiosRequestPending: false,
      setAxiosRequestSuccess: false,
      setAxiosRequestError: false,
      setLoginSuccess: false,
      setLoginError: false,
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
      setAxiosRequestError: nextProps.setAxiosRequestError || false
    });
  }

  render(){
    return(
      <div className="form-wrapper">
        <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.props.handleFormSubmission}>
          {this.state.setAxiosRequestPending ? <Loader></Loader> : '' }
          <fieldset>
            <legend>Form Title</legend>

            <div className="email-password-wrapper clearfix">
              <FormInput
                labelFor="email"
                labelText="Email"
                inputType="text"
                inputName="email"
                errors={this.props.errors}
                handleChange={this.props.handleChange}>
              </FormInput>
              <FormInput
                labelFor="password"
                labelText="Password"
                inputType="password"
                inputName="password"
                errors={this.props.errors}
                handleChange={this.props.handleChange}>
              </FormInput>
            </div>

            <div className={"create " + (this.state.userCreatingAccount ? 'slide-left' : '')}>
              <FormInput
                labelFor="first_name"
                labelText="First Name"
                inputType="text"
                inputName="firstName"
                errors={this.props.errors}
                handleChange={this.props.handleChange}>
              </FormInput>
              <FormInput
                labelFor="last_name"
                labelText="Last Name"
                inputType="text"
                inputName="lastName"
                errors={this.props.errors}
                handleChange={this.props.handleChange}>
              </FormInput>
              <FormSubmit buttonText={'Create'}></FormSubmit>
            </div>

            <div className={"login " + (this.state.userCreatingAccount ? 'slide-left' : '')}>
              <FormRemember></FormRemember>
              <FormSubmit buttonText={'Login'}></FormSubmit>
              <FormCreate handleCreateAccount={this.props.handleCreateAccount}></FormCreate>
            </div>

            <FormMessages
              userCreatingAccount={this.state.userCreatingAccount}
              success={this.state.setAxiosRequestSuccess}
              error={this.state.setAxiosRequestError}>
            </FormMessages>
          </fieldset>
        </form>
      </div>
    );
  }
}

// Export scene.
export default LoginForm;
