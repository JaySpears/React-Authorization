// Dependencies.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserAuthorization } from './../../actions/action.auth';
import { connect } from 'react-redux';

// Authorized route class.
class AuthorizedRoute extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={props => (
        <div>
          <div>
            { !this.props.isAuthorized ? <Redirect to='/'/> : <Component {...props}/> }
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
