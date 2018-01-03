// Import Dependencies.
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import components.
import AuthorizedRoute from './../components/authorized-route/index';

// Import Scences.
import LoginScene from '../scenes/login/index.jsx';
import MainScene from '../scenes/main/index.jsx';

// Set up routes.
const routes = (store) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LoginScene}/>
        <AuthorizedRoute exact path='/main' component={MainScene}/>
      </Switch>
    </div>
  )
}

export default routes;
