// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import FormSubmitStyles from './styles.scss';

class FormSubmit extends React.Component{
  render(){
    return(
      <div>
        <div className="submit">
          <button type="submit" name="button">Login</button>
        </div>
      </div>
    );
  }
}

export default FormSubmit;
