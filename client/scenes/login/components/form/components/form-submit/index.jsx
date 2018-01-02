// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormSubmitStyles from './styles.scss';

class FormSubmit extends React.Component{
  render(){
    return(
      <div>
        <div className="submit">
          <button
            tabIndex={this.props.tabIndex}
            type="submit"
            name="button">
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default FormSubmit;
