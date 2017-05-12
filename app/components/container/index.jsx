// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ContainerStyles from './styles.scss';

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

// Export component.
export default Container;
