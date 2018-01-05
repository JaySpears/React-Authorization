// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import LoaderStyles from './styles.scss';

class Loader extends Component {
  // Render element.
  render() {
    return (
      <div className="loader">
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    )
  }
}

// Export component.
export default Loader;
