import React, { Component } from 'react';
import ProfImage from '../../resources/MaxMesirow.jpg';

class NavBar extends Component {
  render() {
    return (
      <header>
      <div className = "row-container">
        <div className = "col-xs-4" id = "profile">
          <img id = 'profileImage' src = {ProfImage}/>
          <h1>Max Mesirow</h1>
        </div>
        <div className = "col-xs-8" id = "about">
          <p>I am a Computer Science Major at Boston University.
            Outside of class I enjoy attending hackothons and spending
            time in the BU maker space - BUILDS. I am always looking for 
            new opportunities. If you are looking for a developer feel free
            to reach out.</p>
        </div>
      </div>
      </header>
    )
  }
}

export default NavBar;
