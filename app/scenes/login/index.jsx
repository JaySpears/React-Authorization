// Import dependencies.
import React, { Component } from 'react';

class LoginScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form autocomplete="off" name="admin_login" id="admin-login">
        <fieldset>
          <legend>Admin Login</legend>
          <div>
            <label for="email">Email Address:</label><br/>
            <input tabindex="1" type="email" name="email" spellcheck="false"/>
            <div>
              <p class="error">Your email address is invalid.</p>
            </div>
          </div>
          <div>
              <label for="password">Password:</label><br/>
              <input tabindex="2" type="password" name="password"/>
          </div>
          <div class="remember-me">
              <input tabindex="3" type="checkbox" name="remember"/><span>Remember me for 30 days</span>
          </div>
          <div class="submit">
              <button type="submit" name="button">Login</button>
          </div>
          <div class="login-warn">
              <p>Success! Logging you in...</p>
          </div>
          <div class="login-warn">
              <p>Invalid username or password.</p>
          </div>
        </fieldset>
      </form>
    );
  }
}

// Export component.
export default LoginScene;
