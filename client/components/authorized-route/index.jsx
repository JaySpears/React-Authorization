// Dependencies.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserAuthorization } from './../../actions/action.auth';
import { connect } from 'react-redux';

// Authorized route class.
class AuthorizedRoute extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthorized: false
    };
    console.log(props);
    this.props.checkUserAuthorization(localStorage.getItem('token'));
  }

  /**
   * function componentWillReceiveProps, built in react method.
   * Will execute when the properties insides retrieve new
   * values.
   *
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if (!nextProps.isAuthorized) {
      this.props.checkUserAuthorization(localStorage.getItem('token'));
    }
    this.setState({
      isAuthorized: nextProps.isAuthorized || false
    });
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      // this.state.isAuthorized ?
      //   <Route {...rest} render={props => (
      //     <Component {...props}/>
      //   )}/>
      // : <Redirect to='/'/>
      <div>hi</div>
    )
  }
}

// State fromm the login reducer becomes bound to
// this components props.
const mapStateToProps = (state, ownProps) => {
  return {
    isAuthorized: state.authorizationReducer.isAuthorized
  };
}

// Binding action functions with redux's
// dispatch to this components props.
const mapDispatchToProps = (dispatch) => {
  return {
    checkUserAuthorization: (token) => {
      dispatch(checkUserAuthorization(token));
    }
  }
}

// Export AuthorizedRoute.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizedRoute);
