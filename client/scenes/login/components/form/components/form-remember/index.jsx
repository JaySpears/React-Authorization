// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormRememberStyles from './styles.scss';

class FormRemember extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }

  /**
   * function componentWillReceiveProps, built in react method.
   * Will execute when the properties insides retrieve new
   * values.
   *
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps){
    this.setState({
      isChecked: nextProps.rememberUser
    });
  }

  render(){
    return(
      <div>
        <div className="remember-me">
          <input id="remember" type="checkbox" checked={this.state.isChecked} onChange={this.props.handleCheckboxChange}/>
          <label htmlFor="remember"></label><span>Remember Me</span>
        </div>
      </div>
    );
  }
}

export default FormRemember;
