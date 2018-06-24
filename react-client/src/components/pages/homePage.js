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
            
            <div className = "card" id = "embeddedCTF">
                <div className = "cardHeader">
                    <h2>Embedded CTF</h2>
                </div>
                <a href = "https://github.com/maxCut/0xBU_SSS_ATM">
                    <div className = "cardContent">
                        <p>Created a Bank system and attempted to find vulnerabilities in bank systems created by other teams</p>
                    </div>
                </a>
            </div>

            <div className = "card" id = "flappyBox">
                <div className = "cardHeader">
                    <h2>Flappy Box</h2>
                </div>
                <a href = "https://github.com/maxCut/FlappyBox">
                    <div className = "cardContent">
                        <p>Remake of popular game "flappy bird" but for non mobile devices</p>
                    </div>
                </a>
            </div>
           
           <div className = "card" id = "fileBrowser">
                <div className = "cardHeader">
                    <h2>File Browser</h2>
                </div>
                <a href = "https://github.com/maxCut/fileBrowser">
                    <div className = "cardContent">
                        <p>Portable file browser that shows hidden folders and files</p>
                    </div>
                </a>
          </div>

          <div className = "card" id = "communityCast">
                <div className = "cardHeader">
                    <h2>Community Cast</h2>
                </div>
                <a href = "https://github.com/maxCut/CommunityCast">
                    <div className = "cardContent">
                        <p>Multi Party Casting extension for chrome cast</p>
                        <p>(In Development)</p>
                    </div>
                </a>
          </div>

        </div>
      </div>
    )
  }
}

export default HomePage;
