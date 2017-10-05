// Import Dependencies.
import React from 'react';
import { Route } from 'react-router-dom'

// Import Scences.
import LoginScene from '../scenes/login/index.jsx';

// Set up routes.
const routes = (
  <div>
    <Route exact path='/' component={LoginScene}/>
  </div>
);

export default routes;
