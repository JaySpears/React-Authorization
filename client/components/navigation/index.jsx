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
        <div>
          <NavLink to='/tracker' activeClassName="active">Tracker</NavLink>
        </div>
        <div>
          <NavLink to='/history' activeClassName="active">History</NavLink>
        </div>
      </nav>
    )
  }
}

// Export component.
export default Navigation;
