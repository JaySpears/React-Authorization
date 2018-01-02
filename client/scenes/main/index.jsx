// Import dependencies.
import React, { Component } from 'react';

// Import components.
import Header from './../../components/header';

// Import scene styles.
import MainSceneStyles from './styles.scss';

class MainScene extends React.Component{
  render(){
    return(
      <div>
        <Header></Header>
      </div>
    );
  }
}

// Export scene.
export default MainScene;
