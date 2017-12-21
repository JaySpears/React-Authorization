// Import dependencies.
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// Import styles.
import NavigationStyles from './styles.scss';

class Navigation extends Component {
  // Render element.
  render() {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/main">Main</NavLink>
      </nav>
    )
  }
}

// Export component.
export default Navigation;
