// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormMessagesStyles from './styles.scss';

class FormMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userCreatingAccount: false,
      success: false,
      error: false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      userCreatingAccount: nextProps.userCreatingAccount || false,
      success: nextProps.success || false,
      error: nextProps.error || false
    })
  }

  render(){
    return(
      <div>
        <div className={"success-message " + (this.state.success ? 'show' : 'hide')}>
          <p><b>Success!</b> Logging you in...</p>
        </div>

        <div className={"error-message " + (this.state.error ? 'show' : 'hide')}>
          { this.state.userCreatingAccount
            ? <p><b>Sorry!</b> This email is already in use.</p>
            : <p><b>Error!</b> Invalid username or password.</p>
          }
        </div>
      </div>
    );
  }
}

export default FormMessages;
