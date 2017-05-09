// Import dependencies.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

// Import Redux Actions.
import { increment } from '../../../../actions/index.js'

// Import styles.
import ComponentStyles from './styles.scss';

class TrackerTimer extends Component {
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      metricTime: null
    }
    this.startWorkload = this.startWorkload.bind(this);
    this.endWorkload = this.endWorkload.bind(this);
    this.determineCurrentWorkloadTime = this.determineCurrentWorkloadTime.bind(this);
    setInterval(this.determineCurrentWorkloadTime, 1000);
  }

  // Checks to see if current task is running.
  // Uses localStorage to track that time for when
  // a user closes the plugin. This will be executed every second.
  determineCurrentWorkloadTime(){
    const moment = extendMoment(Moment);
    let currentTime = moment().format();
    let workloadStartTime = localStorage.getItem('workloadStartTime');
    let start = moment(currentTime);
    let end = moment(workloadStartTime);
    let duration = moment.range(start, end);
    let durationSeconds = duration.diff('seconds');
    let durationMinutes = duration.diff('minutes');
    let durationHours = duration.diff('hours');

    // NOTE: Continue working on time difference between start and end time.
    // This will need to be applied in scope. Use format HH:MM:SS.
    console.log(

    );
  }

  // Starts the users workload time.
  startWorkload(){
    // Store time of start date in localStorage.
    localStorage.setItem('workloadStartTime', moment().format());
  }

  // Ends the users workload time.
  endWorkload(){
    // Reset time of start date in localStorage.
    localStorage.setItem('workloadStartTime', null);
  }

  render(){
    return (
      <div className="timer">
        <div className="start-wrapper">
          <button onClick={this.startWorkload}>
            <i className="start fa fa-2x fa-play-circle" aria-hidden="true"></i>
            <p>Start</p>
          </button>
        </div>
        <div className="stop-wrapper">
          <button onClick={this.endWorkload}>
            <i className="stop fa fa-2x fa-stop-circle" aria-hidden="true"></i>
            <p>Stop</p>
          </button>
        </div>
      </div>
    )
  }
}

// Export component.
export default TrackerTimer;
