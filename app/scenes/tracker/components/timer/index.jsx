// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ComponentStyles from './styles.scss';

class TrackerTimer extends Component {
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="timer">
        <button>
          <i className="start fa fa-2x fa-play-circle" aria-hidden="true"></i>
          <p>Start</p>
        </button>
        <button>
          <i className="stop fa fa-2x fa-stop-circle" aria-hidden="true"></i>
          <p>Stop</p>
        </button>
      </div>
    )
  }
}

// Export component.
export default TrackerTimer
