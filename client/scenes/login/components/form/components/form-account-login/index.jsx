// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormAccountLoginStyles from './styles.scss';

class FormAccountLogin extends React.Component{
  render(){
    return(
      <div>
        <div className={"account-login " + (this.props.opacityClass)} onClick={this.props.toggleLoginView}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default FormAccountLogin;
