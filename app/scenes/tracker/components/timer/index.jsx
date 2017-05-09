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
      metricTime: {
        seconds: 0,
        minutes: 0,
        hours: 0
      }
    }
    this.startWorkload = this.startWorkload.bind(this);
    this.endWorkload = this.endWorkload.bind(this);
    this.determineCurrentWorkloadTime = this.determineCurrentWorkloadTime.bind(this);
    this.workloadInterval = this.workloadInterval.bind(this);
    if (localStorage.getItem('workloadStartTime')) {
      this.workloadInterval();
    }
  }
  // Interval function for workload.
  workloadInterval(option){
    let workloadInterval = setInterval(this.determineCurrentWorkloadTime, 1000);
    if (option === 'kill') {
      clearInterval(workloadInterval);
    }
  }

  // Determine difference in time of start time and end time.
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

    // Calculate remaining amount of minutes that do not evenly divide into an hour.
    let calculatedMinutes = durationMinutes / 60;
    calculatedMinutes = calculatedMinutes % 1;
    calculatedMinutes = Math.round((60 * calculatedMinutes) * -1);

    // Calculate remaining amount of seconds that do not evenly divide into an minute.
    let calculatedSeconds = durationSeconds / 60;
    calculatedSeconds = calculatedSeconds % 1;
    calculatedSeconds = Math.round((60 * calculatedSeconds) * -1);

    if (workloadStartTime) {
      this.setState({
        metricTime:{
          seconds: calculatedSeconds,
          minutes: calculatedMinutes,
          hours: durationHours * -1
        }
      });
    }
  }

  // Starts the users workload time.
  startWorkload(){
    // Store time of start date in localStorage.
    localStorage.setItem('workloadStartTime', Moment().format());
    this.workloadInterval();
  }

  // Ends the users workload time.
  endWorkload(){
    // Clear workloadInterval.
    this.workloadInterval('kill');

    // Reset state.
    this.setState({
      metricTime:{
        seconds: 0,
        minutes: 0,
        hours: 0
      }
    });

    // Remove start time from localStorage.
    localStorage.removeItem('workloadStartTime');
  }

  render(){
    return (
      <div className="timer clearfix">
        <p className="duration">{this.state.metricTime.hours}<span>H</span> {this.state.metricTime.minutes}<span>M</span> {this.state.metricTime.seconds}<span>S</span></p>
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
