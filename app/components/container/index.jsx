// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ContainerStyles from './styles.scss';

// Export component.
export default

class Container extends Component {
  // Render element.
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
