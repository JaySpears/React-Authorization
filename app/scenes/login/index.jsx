// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

class LoginScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form autoComplete="off" name="user_login" id="user-login">
        <fieldset>
          <legend>Track It</legend>
          <div>
            <label htmlFor="email">Email Address:</label><br/>
            <input tabIndex="1" type="email" name="email" spellCheck="false"/>
            <div>
              <p className="error">Your email address is invalid.</p>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label><br/>
            <input tabIndex="2" type="password" name="password"/>
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
