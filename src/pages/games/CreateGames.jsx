import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import flashIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import logo from "../../assets/logo.png";
import createIcon from "../../assets/icons/create-light.png";
import "../../sass/global.css";
import "../../sass/games/create.css";

export function CreateGames() {
    const navigate = useNavigate();
    const [selectedDices, setSelectedDices] = useState([]);

    const toggleDiceSelection = (dice) => {
        setSelectedDices((prev) =>
            prev.includes(dice) ? prev.filter((d) => d !== dice) : [...prev, dice]
        );
    };

    return (
        <div>
            {/* BOTTOM NAVIGATION */}
            <nav className="navbar">
                <Link to="/pages/dices/index">
                    <img src={diceIcon} alt="dice-icon" />
                </Link>
                <Link to="/pages/games/mygames">
                    <img src={gamesIcon} alt="games-icon" />
                </Link>
                <Link to="/">
                    <img src={homeIcon} alt="home-icon" />
                </Link>
                <Link to="/pages/quickgame/index">
                    <img src={flashIcon} alt="quickgame-icon" />
                </Link>
                <Link to="/pages/help/index">
                    <img src={helpIcon} alt="help-icon" />
                </Link>
            </nav>

            {/* APP TITLE */}
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="Diceverse Logo" />
            </div>

            {/* MAIN CONTENT */}
            <section className="main-content">
                <div className="main-content-header">
                    <img src={gamesIcon} alt="Games Icon" />
                    <h2>Create Game</h2>
                </div>

                <div className="game-form">
                    <input type="text" placeholder="Name" className="game-name-input" />

                    <div className="dice-selection">
                        <h3>Select dices for this game</h3>
                        <div className="dice-grid">
                            {[...Array(12)].map((_, index) => {
                                const diceNumber = `Dice N${index + 1}`;
                                return (
                                    <div
                                        key={diceNumber}
                                        className={`dice-option ${selectedDices.includes(diceNumber) ? 'selected' : ''}`}
                                        onClick={() => toggleDiceSelection(diceNumber)}
                                    >
                                        <h4>{diceNumber}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button className="create-game-btn" onClick={() => navigate("/pages/games/mygames")}>
                        <img src={createIcon} alt="Create Game" />
                        Create Game
                    </button>
                </div>
            </section>
        </div>
    );
}