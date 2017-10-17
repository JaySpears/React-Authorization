// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormCreateStyles from './styles.scss';

class FormCreate extends React.Component{
  render(){
    return(
      <div>
        <div className="account-creation">
          <a href="#">Create an account!</a>
        </div>
      </div>
    );
  }
}

export default FormCreate;
