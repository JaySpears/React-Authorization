// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Navigation from '../../components/navigation/index.jsx';

class HistoryScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation/>
      </div>
    );
  }
}

// Export component.
export default HistoryScene;
