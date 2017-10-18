// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormRememberStyles from './styles.scss';

class FormRemember extends React.Component{
  render(){
    return(
      <div>
        <div className="remember-me">
          <input id="remember" type="checkbox" value="value1"/>
          <label htmlFor="remember"></label><span>Remember Me</span>
        </div>
      </div>
    );
  }
}

export default FormRemember;
