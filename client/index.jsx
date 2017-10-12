// React dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

// Import current root state of the application via reducers,
import reducers from './reducers/index.js'

// Import scences.
import routes from './routes/index.js';

// Import global components.
import Container from './components/container/index.jsx';

// Create store for state management.
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(reducers);

// Render application.
ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Router>{routes}</Router>
    </Container>
  </Provider>,
  document.getElementById('application')
);

// Accept hot reload for development.
if (module.hot) {
  module.hot.accept();
}
