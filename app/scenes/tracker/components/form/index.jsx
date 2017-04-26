// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import ComponentStyles from './styles.scss';

class TrackerForm extends Component {
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {
      task: '',
      isFormValid: false,
      formSubmitted: false,
      taskNumber: '',
      existingTaskNumbers: ['WIZ-4352', 'SHEL12-3X43']
    }
    this.updateTaskState = this.updateTaskState.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  // This constructor verifies if any text has been enter into the task input.
  updateTaskState(event){
    const targetName = event.target.name;
    this.setState({[targetName]: event.target.value});
    if (targetName == 'task' && event.target.value.length > 0) {
      this.setState({isFormValid: true});
    } else if(targetName == 'task'){
      this.setState({isFormValid: false});
      this.setState({formSubmitted: false});
    }
  }

  // Form submission.
  validateForm(event){
    event.preventDefault();
    if (this.state.task.length > 0) {
      this.setState({formSubmitted: true});
    }
  }

  // Render element.
  render() {
    // The array tasks will contain all existing task numbers.
    // Then will be bound to the virtual dom.
    const tasks = [];
    this.state.existingTaskNumbers.forEach(function(task, index){
      tasks.push(<option key={index}>{task}</option>);
    });

    // Return dom element.
    return (
      <form onSubmit={this.validateForm}>
        <legend>Track It</legend>
        <i>What're you working on?</i>
        <input type="text" value={this.state.task} name="task" className="task-name" onChange={this.updateTaskState} autoFocus />
        <button className={this.state.isFormValid ? 'valid' : 'invalid'}>
          <i className="fa fa-2x fa-plus-circle" aria-hidden="true"></i>
        </button>
        {( this.state.isFormValid && this.state.formSubmitted ?
          <div>
            <p>Assign {this.state.task} a task number?</p>
            <input type="text" name="taskNumber" className="task-number" value={this.state.taskNumber} onChange={this.updateTaskState} autoFocus placeholder="SHEL12-3X43"/>
            {( this.state.existingTaskNumbers.length > 0 ?
              <div>
                <p>Use an existing task number instead?</p>
                <select>
                  {tasks}
                </select>
              </div> : false
            )}
          </div> : false
        )}
      </form>
    )
  }
}


// Export component.
export default TrackerForm
