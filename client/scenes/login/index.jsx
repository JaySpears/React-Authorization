// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

class LoginScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);

    // State object.
    this.state = {
      email: '',
      password: ''
    };

    // Bind methods.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        passowrd: this.state.password
      })
    }).then(function success(){

    }, function error(err){
      console.error(err);
    });
  }

  render(){
    return(
      <form autoComplete="off" name="user_login" id="user-login" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Track It</legend>
          <div>
            <label htmlFor="email">Email Address:</label><br/>
            <input tabIndex="1" type="email" name="email" spellCheck="false" value={this.state.email} onChange={this.handleChange}/>
            <div>
              <p className="error">Your email address is invalid.</p>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label><br/>
            <input tabIndex="2" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>
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
