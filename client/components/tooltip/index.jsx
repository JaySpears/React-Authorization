// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import TooltipStyles from './styles.scss';

class Tooltip extends Component {
  render() {
    return (
      <div className="tooltip">
        {this.props.children}
      </div>
    )
  }
}

// Export component.
export default Tooltip;
