// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ComponentStyles from './styles.scss';

class TrackerTimer extends Component {
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      metricTime: {
        hours: Number(props.hours),
        minutes: Number(props.minutes),
        seconds: Number(props.seconds)
      }
    }
    this.timeCalculation = this.timeCalculation.bind(this);
  }

  timeCalculation() {
    const metricSeconds = this.state.metricTime.seconds + 1;
    const metricMinutes = this.state.metricTime.minutes + 1;
    const metricHours = this.state.metricTime.hours + 1;
    if (metricSeconds % 60 == 0 && metricMinutes % 60 != 0) {
      this.setState({
        metricTime: {
          seconds: 0,
          minutes: metricMinutes,
          hours: this.state.metricTime.hours
        }
      })
    } else if (metricSeconds % 60 == 0 && metricMinutes % 60 == 0){
      this.setState({
        metricTime: {
          seconds: 0,
          minutes: 0,
          hours: metricHours
        }
      })
    } else if (metricSeconds % 60 != 0 && metricMinutes % 60 != 0) {
      this.setState({
        metricTime: {
          seconds: metricSeconds,
          minutes: this.state.metricTime.minutes,
          hours: this.state.metricTime.hours
        }
      })
    }
  }

  render(){
    return (
      <div className="timer">
        <div className="start-wrapper">
          <button>
            <i className="start fa fa-2x fa-play-circle" aria-hidden="true"></i>
            <p>Start</p>
          </button>
        </div>
        <div className="stop-wrapper">
          <p>{this.state.metricTime.hours}h {this.state.metricTime.minutes}m {this.state.metricTime.seconds}s</p>
          <button>
            <i className="stop fa fa-2x fa-stop-circle" aria-hidden="true"></i>
            <p>Stop</p>
          </button>
        </div>
      </div>
    )
  }
}

// Export component.
export default TrackerTimer
