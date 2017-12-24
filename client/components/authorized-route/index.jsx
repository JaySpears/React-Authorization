// Dependencies.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserAuthorization } from './../../actions/action.auth';
import { connect } from 'react-redux';

// Authorized route class.
class AuthorizedRoute extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isAuthorized) {
      this.setState({
        allowUserAccessToComponent: false
      });
    }
  }

  componentWillMount(){
    // When the users authorization is false, meaning they either hard
    // refreshed the page and reset the isAuthorized property, or they
    // manually typed in a url prior to logging in successfully for this
    // application, we will ensure a token is present in localStorage
    // for the user. If one doesn't exist, redirect them to the login page.
    // If one does exist, call the checkUserAuthorization action, which will
    // pass the users token down to the API for verification.
    // If an error returns redirect, otherwise show the component :)
    if (!this.props.isAuthorized) {
      const usersToken = localStorage.getItem('token');
      if (usersToken !== null) {
        this.props.checkUserAuthorization(usersToken);
      } else {
        this.setState({
          allowUserAccessToComponent: false
        });
      }
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={props => (
        <div>
          <div>
            { !this.state.allowUserAccessToComponent ? <Redirect to='/'/> : <Component {...props}/> }
          </div>
        </div>
      )} />
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
