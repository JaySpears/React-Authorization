// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import InputStyles from './styles.scss';

class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      errorMessage: '',
      errorCatalog: {
        email: {
          required: 'Email is a required field.',
          invalid: 'Please provide a valid email address'
        },
        password: {
          required: 'Password is a required field'
        }
      }
    }
  }

  /**
   * function componentWillReceiveProps, native
   * react constructor to handle prop value changes.
   *
   * @param  {Object} nextProps [description]
   */
  componentWillReceiveProps(nextProps){
    if (nextProps.errors) {
      this.setState({
        errorMessage: ''
      });
      for (let errorType in nextProps.errors[this.props.inputName]) {
        if (nextProps.errors[this.props.inputName].hasOwnProperty(errorType)) {
          this.setState({
            errorMessage: this.state.errorCatalog[this.props.inputName][errorType]
          })
        }
      }
    }
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
          <p className="error">{this.state.errorMessage}</p>
        </div>
      </div>
    )
  }
}

// Export component.
export default FormInput;
