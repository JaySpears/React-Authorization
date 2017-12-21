// Dependencies.
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

// Authorized route class.
class AuthorizedRoute extends Component {
  constructor(props){
    super(props);
    this.state = this.props.store.getState();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      this.state.authorizationReducer.isAuthorized ?
        <Route {...rest} render={props => (
          <Component {...props}/>
        )}/>
      : <Redirect to={{ pathname: '/' }}/>
    )
  }
}

// Export AuthorizedRoute.
export default AuthorizedRoute;
