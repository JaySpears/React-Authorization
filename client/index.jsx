// React dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import scences.
import routes from './routes/index.js';

// Import global components.
import Container from './components/container/index.jsx';

// Render application.
ReactDOM.render(
  <Container>
    <Router>{routes}</Router>
  </Container>,
  document.getElementById('application')
);

// Accept hot reload for development.
if (module.hot) {
  module.hot.accept();
}
