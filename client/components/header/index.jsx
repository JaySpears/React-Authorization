// Import dependencies.
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// Import components.
import Container from './../container/index';
import Tooltip from './../tooltip/index';

// Import styles.
import HeaderStyles from './styles.scss';

class Header extends Component {
  constructor(props){
    super(props);
    // State.
    this.state = {
      showTooltip: false
    }

    // Binding methods.
    this.toggleToolTip = this.toggleToolTip.bind(this);
  }

  /**
   * function componentDidMount, method called
   * when the component mounts to the DOM. Added a click
   * callback to the body to hide tooltips if the user
   * clicked outside of them.
   */
  componentDidMount() {
    document.body.addEventListener('click', (event) => {
      let toolTipSelector = document.querySelector('.tooltip');
      let userIconSelector = document.querySelector('.fa-user');
      if (toolTipSelector !== null &&
        !toolTipSelector.contains(event.target) &&
        !userIconSelector.contains(event.target)) {
          this.setState({
            showTooltip: false
          });
      }
    });
  }

  /**
   * function toggleToolTip, on click of the user icon,
   * toggle state `showTooltip` which will either hide or
   * display the tooltip.
   *
   * @param  {Object} event, click event.
   */
  toggleToolTip(event) {
    let userIconSelector = document.querySelector('.fa-user');
    let toolTipSelector = document.querySelector('.tooltip');
    if (toolTipSelector === null && event.target === userIconSelector) {
      this.setState({
        showTooltip: !this.state.showTooltip
      });
    }
  }

  render() {
    return (
      <header>
        <Container>
          <div className="wrapper clearfix">
            <nav>
              <NavLink to="/main">Main</NavLink>
            </nav>
            <div className="user-information-wrapper">
              <i onClick={this.toggleToolTip} className="fa fa-user" aria-hidden="true"></i>
              { this.state.showTooltip ?
                <Tooltip>
                  <p>Josh Spears</p>
                  <p>josh.spears@ansira.com</p>
                  <a href="#">Sign Out</a>
                </Tooltip> : '' }
            </div>
          </div>
        </Container>
      </header>
    )
  }
}

// Export component.
export default Header;
