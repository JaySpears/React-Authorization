// Import Dependencies.
import React from 'react';
import { Route } from 'react-router-dom'

// Import Scences.
import TrackerScene from '../scenes/tracker/index.jsx';

// Set up routes.
const routes = (
  <div>
    <Route exact path='/' component={TrackerScene}/>
    <Route exact path='/tracker' component={TrackerScene}/>
  </div>
);

export default routes;
