// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import InputStyles from './styles.scss';

class FormInput extends Component {
  constructor(props){
    super(props);
  }
  // Render element.
  render() {
    return (
      <div>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}:</label><br/>
        <input type={this.props.inputType} name={this.props.inputName} spellCheck="false" />
        <div>
          <p className="error">{this.props.labelText} is a required field.</p>
        </div>
      </div>
    )
  }
}

// Export component.
export default FormInput;
