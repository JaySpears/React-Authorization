// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import FormInput from './components/form-input/index';
import FormRemember from './components/form-remember/index';
import FormSubmit from './components/form-submit/index';
import FormMessages from './components/form-messages/index';
import FormCreate from './components/form-messages/index';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.props.handleLogin}>
        <fieldset>
          <legend>Idk Yet</legend>
          <FormInput
            labelFor="first_name"
            labelText="First Name"
            inputType="text"
            inputName="first_name"
            handleChange={this.props.handleChange}
            hideComponent={!this.props.setUserCreatingAccount}>
          </FormInput>
          <FormInput
            labelFor="last_name"
            labelText="Last Name"
            inputType="text"
            inputName="last_name"
            handleChange={this.props.handleChange}
            hideComponent={!this.props.setUserCreatingAccount}>
          </FormInput>
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
          <FormRemember></FormRemember>
          <FormSubmit></FormSubmit>
          <FormCreate></FormCreate>
        </fieldset>
      </form>
    );
  }
}

// Export scene.
export default LoginForm;
