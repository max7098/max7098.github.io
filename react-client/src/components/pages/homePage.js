import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className = "homePage">
        <h3>Projects</h3>
        <div className = "scrolling-wrapper">
            <div className = "card"><h2>Card</h2></div>
            <div className = "card"><h2>Card</h2></div>
            <div className = "card"><h2>Card</h2></div>
            <div className = "card"><h2>Card</h2></div>
            <div className = "card"><h2>Card</h2></div>
        </div>
      </div>
    )
  }
}

export default HomePage;
