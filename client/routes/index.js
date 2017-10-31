// Import Dependencies.
import React from 'react';
import { Route } from 'react-router-dom'

// Import Scences.
import LoginScene from '../scenes/login/index.jsx';
import MainScene from '../scenes/main/index.jsx';

// Set up routes.
const routes = (
  <div>
    <Route exact path='/' component={LoginScene}/>
    <Route exact path='/main' component={MainScene}/>
  </div>
);

export default routes;
