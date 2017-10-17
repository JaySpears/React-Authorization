// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormMessagesStyles from './styles.scss';

class FormMessages extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      success: false,
      error: false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      success: nextProps.success || false,
      error: nextProps.error || false
    })
  }

  render(){
    return(
      <div>
        <div className={"success-message " + (this.state.success ? 'show' : 'hidden')}>
          <p>Success! Logging you in...</p>
        </div>
        <div className={"error-message " + (this.state.error ? 'show' : 'hidden')}>
          <p>Invalid username or password.</p>
        </div>
      </div>
    );
  }
}

export default FormMessages;
