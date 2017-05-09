// This is a hacky way to shut hot reload logging the FUCK up.
(function(global) {
  var console_log = global.console.log;
    global.console.log = function() {
    if (!(arguments.length == 1 && typeof arguments[0] === 'string' && arguments[0].match(/^\[(HMR|WDS)\]/))) {
      console_log.apply(global.console, arguments);
    }
  }
})(window);

// Import dependencies.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import trackerApp from './reducers/index.js'

// Import components.
import Container from './components/container/index.jsx';

// Import scenes.
import Tracker from './scenes/tracker/index.jsx';

// Create store for state.
let store = createStore(trackerApp);

// Application Element.
class TrackIt extends React.Component{
  render(){
    return(
      <Container>
        <Tracker />
      </Container>
    );
  }
}

ReactDOM.render(
  <TrackIt />,
  document.getElementById('application')
);

// Accept hot reload.
if (module.hot) {
  module.hot.accept();
}
