// Import dependencies.
import React, { Component } from 'react';

// Import styles.
import InputStyles from './styles.scss';

class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      errorCatalog: {
        email: {
          required: 'Email is a required field.',
          invalid: 'Please provide a valid email address'
        },
        password: {
          required: 'Password is a required field'
        },
        firstName: {
          required: 'First name is a required field'
        },
        lastName: {
          required: 'Last name is a required field'
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
    if (nextProps.formValues) {
      for (let input in nextProps.formValues) {
        if (nextProps.formValues.hasOwnProperty(this.props.inputName)) {
          this.setState({
            value: nextProps.formValues[this.props.inputName]
          })
        }
      }
    }
    if (nextProps.errors) {
      this.setState({
        errorMessage: ''
      });
      // Dynamic way to added error handling based on nextprops values,
      // and the input field name passed in via props.
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
      <div>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}:</label><br/>
        <input
          type={this.props.inputType}
          name={this.props.inputName}
          onChange={this.props.handleInputChange}
          placeholder={this.props.labelText}
          value={this.state.value}
          spellCheck="false"
          tabIndex={this.props.tabIndex}/>
          { this.props.hasFormBeenSubmitted && this.state.errorMessage.length > 0 ?
            <div className="error-wrapper">
              <p className="error">{this.state.errorMessage}</p>
            </div>
          : '' }
      </div>
    )
  }
}

// Export component.
export default FormInput;
