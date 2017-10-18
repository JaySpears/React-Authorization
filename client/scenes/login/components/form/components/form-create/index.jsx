// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormCreateStyles from './styles.scss';

class FormCreate extends React.Component{
  render(){
    return(
      <div>
        <div className="account-creation">
          <p>Not registerd? <a onClick={this.props.handleCreateAccount} href="#">Create an account</a></p>
        </div>
      </div>
    );
  }
}

export default FormCreate;
