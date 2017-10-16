// Import dependencies.
import React, { Component } from 'react';
import { login } from '../../actions/action.login';
import { connect } from 'react-redux';

// Import scene styles.
import LoginSceneStyles from './styles.scss';

// Import components.
import LoginForm from './components/form/index';

class LoginScene extends React.Component{
  constructor(props){
    super(props);
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
      <div>
        <LoginForm submit={this.handleLogin}></LoginForm>
      </div>
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
