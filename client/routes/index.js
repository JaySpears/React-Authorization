// Import Dependencies.
import React from 'react';
import { Route } from 'react-router-dom'

// Import Scences.
import LoginScene from '../scenes/login/index.jsx';
import TrackerScene from '../scenes/tracker/index.jsx';
import HistoryScene from '../scenes/history/index.jsx';

// Set up routes.
const routes = (
  <div>
    <Route exact path='/' component={LoginScene}/>
    <Route exact path='/tracker' component={TrackerScene}/>
    <Route exact path='/history' component={HistoryScene}/>
  </div>
);

export default routes;
