// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import InputStyles from './styles.scss';

class FormInput extends Component {
  constructor(props){
    super(props);
    this.errors = {
      email: {
        required: 'required email',
        invalid: 'invalid email'
      },
      password: {
        required: 'required password'
      },
      firstName: {
        required: 'required first name'
      },
      lastName: {
        required: 'required last name'
      }
    };
  }

  // Render element.
  render() {
    return (
      <div className={this.props.hideComponent ? 'hidden' : ''}>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}:</label><br/>
        <input
          type={this.props.inputType}
          name={this.props.inputName}
          onChange={this.props.handleChange}
          spellCheck="false" />
        <div>
          <p className="error">{this.props.labelText} is a required field.</p>
        </div>
      </div>
    )
  }
}

// Export component.
export default FormInput;
