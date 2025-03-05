import React from "react";
import "../../sass/global.css";
import "../../sass/quick_game/play.css";
import logo from "../../assets/logo.png";
import gameIcon from "../../assets/icons/games.png";
import rollIcon from "../../assets/icons/roll-light.png";


export function QuickGamePlay() {
    return (
        <div>
            {/* APP TITLE */}
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="Diceverse Logo" />
            </div>

            {/* MAIN CONTENT */}
            <section className="main-content">
                <div className="main-content__header">
                    <img src={gameIcon} alt="games-icon" />
                    <h2>Quick Name</h2>
                </div>
                <div className="quick-game-content">
                    <div className="quick-game-dice">
                        <h3>QUICK GAME DICE</h3>
                    </div>
                </div>

                <button className="roll-button">
                    Roll Dice <img src={rollIcon} alt="Roll Icon" />
                </button>
            </section>
        </div>
    );
}
