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
  render(){
    return(
      <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.props.submit}>
        <fieldset>
          <legend>Idk Yet</legend>
          <FormInput
            labelFor="first_name"
            labelText="First Name"
            inputType="text"
            inputName="first_name">
          </FormInput>
          <FormInput
            labelFor="last_name"
            labelText="Last Name"
            inputType="text"
            inputName="last_name">
          </FormInput>
          <FormInput
            labelFor="email"
            labelText="Email"
            inputType="email"
            inputName="email">
          </FormInput>
          <FormInput
            labelFor="password"
            labelText="Password"
            inputType="password"
            inputName="password">
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
