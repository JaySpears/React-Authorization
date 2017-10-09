// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import Input from './components/input/index';

class LoginScene extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    // Bind methods.
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  /**
   * handleChange, handles state updates.
   * @param  {Object} event
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * handleCreateAccount, submission method for user
   * account creation.
   *
   * @param  {Object} event
   */
  handleCreateAccount(event) {
    event.preventDefault();
    fetch('/users/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        passowrd: this.state.password
      })
    }).then(function(){

    }).catch(function(err){
      console.error(err);
    });
  }

  /**
   * handleLogin, submission method for user
   * account login.
   *
   * @param  {Object} event
   */
  handleLogin(event) {
    event.preventDefault();
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        passowrd: this.state.password
      })
    }).then(function(){

    }).catch(function(err){
      console.error(err);
    });
  }

  render(){
    return(
      <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.handleLogin}>
        <fieldset>
          <legend>Idk Yet</legend>
          <Input
            labelFor="first_name"
            labelText="First Name"
            inputType="text"
            inputName="first_name">
          </Input>
          <Input
            labelFor="last_name"
            labelText="Last Name"
            inputType="text"
            inputName="last_name">
          </Input>
          <Input
            labelFor="email"
            labelText="Email"
            inputType="email"
            inputName="email">
          </Input>
          <Input
            labelFor="password"
            labelText="Password"
            inputType="password"
            inputName="password">
          </Input>
          <div className="remember-me">
            <input tabIndex="3" type="checkbox" name="remember"/><span>Remember me for 30 days</span>
          </div>
          <div className="submit">
            <button type="submit" name="button">Login</button>
          </div>
          <div className="account-creation">
            <p>Create an account?</p>
          </div>
          <div className="success">
            <p>Success! Logging you in...</p>
          </div>
          <div className="failure">
            <p>Invalid username or password.</p>
          </div>
        </fieldset>
      </form>
    );
  }
}

// Export scene.
export default LoginScene;
