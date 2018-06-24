import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className = "homePage">
        <h1>Projects</h1>
        <div className = "scrolling-wrapper">
            <div className = "card">
                <div className = "cardHeader">
                    <h2>Pokemon Infinity</h2>
                </div>
                <a href = "https://github.com/maxCut/pokemon_infinity">
                    <div className = "cardContent" id = "pokemonInfinity">
                        <p>Procedural level mapping applied to "Pokemon" to create infinitely large worlds</p>
                    </div>
                </a>
            </div>
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
