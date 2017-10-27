// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormAccountCreateStyles from './styles.scss';

class FormAccountCreate extends React.Component{
  render(){
    return(
      <div>
        <div className="account-creation">
          <p>Not registerd? <a onClick={this.props.toggleLoginView} href="#">Create an account</a></p>
        </div>
      </div>
    );
  }
}

export default FormAccountCreate;
