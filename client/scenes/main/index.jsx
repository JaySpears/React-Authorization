// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Navigation from './../../components/navigation';

// Import scene styles.
import MainSceneStyles from './styles.scss';

class MainScene extends React.Component{
  render(){
    return(
      <div>
        <Navigation></Navigation>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
