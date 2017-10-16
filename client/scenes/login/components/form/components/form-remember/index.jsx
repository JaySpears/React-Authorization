// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormRememberStyles from './styles.scss';

class FormRemember extends React.Component{
  render(){
    return(
      <div>
        <div className="remember-me">
          <input tabIndex="3" type="checkbox" name="remember"/><span>Remember me for 30 days</span>
        </div>
      </div>
    );
  }
}

export default FormRemember;
