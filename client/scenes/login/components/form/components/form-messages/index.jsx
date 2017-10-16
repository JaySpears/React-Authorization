// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormMessagesStyles from './styles.scss';

class FormMessages extends React.Component{
  render(){
    return(
      <div>
        <div className="success">
          <p>Success! Logging you in...</p>
        </div>
        <div className="failure">
          <p>Invalid username or password.</p>
        </div>
      </div>
    );
  }
}

export default FormMessages;
