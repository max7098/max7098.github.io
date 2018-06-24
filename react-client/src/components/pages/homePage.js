import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className = "homePage">
        <h1>Projects</h1>
        <div className = "scrolling-wrapper">
            <div className = "card" id = "pokemonInfinity">
                <div className = "cardHeader">
                    <h2>Pokemon Infinity</h2>
                </div>
                <a href = "https://github.com/maxCut/pokemon_infinity">
                    <div className = "cardContent">
                        <p>Procedural level mapping applied to "Pokemon" to create infinitely large worlds</p>
                    </div>
                </a>
            </div>
            <div className = "card" id = "communityCash">
                <div className = "cardHeader">
                    <h2>Community Cash</h2>
                </div>
                <a href = "https://github.com/Duck-and-Windmill/CommunitiCash">
                    <div className = "cardContent">
                        <p>Comunity Cash is a "micro-insurance" website that groups users together based on income and risk factors 
                            Y-Hacks 2016 Intuit Mint Challenge Winner</p>
                    </div>
                </a>
            </div>
            
            <div className = "card" id = "EmbeddedCTF">
                <div className = "cardHeader">
                    <h2>Embedded CTF</h2>
                </div>
                <a href = "https://github.com/maxCut/0xBU_SSS_ATM">
                    <div className = "cardContent">
                        <p>Created a Bank system and attempted to find vulnerabilities in bank systems created by other teams</p>
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
