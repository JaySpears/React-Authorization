// Import dependencies.
import React, { Component } from 'react';
import { login } from '../../actions/action.login';
import { connect } from 'react-redux';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import Input from './components/input/index';

class LoginScene extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      email: '',
      password: ''
    };

    // Bind methods.
    this.handleChange = this.handleChange.bind(this);
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
   * handleLogin, submission method for user
   * account login. Dispatches the login action.
   *
   * @param  {Object} event
   */
  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(
      this.state.email,
      this.state.password
    ));
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

function select(state) {
  return {
    data: state
  };
}

// Export scene.
export default connect(select)(LoginScene);
