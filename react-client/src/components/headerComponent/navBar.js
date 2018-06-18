import React, { Component } from 'react';
import ProfImage from '../../resources/MaxMesirow.jpg';

class NavBar extends Component {
  render() {
    return (
      <header>
        <img className = 'profileImage' src = {ProfImage}/>
        <h1>Max Mesirow</h1>
      </header>
    )
  }
}

export default NavBar;
