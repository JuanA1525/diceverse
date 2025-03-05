import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gamesIcon from "../../assets/icons/games.png";
import logo from "../../assets/logo.png";
import createIcon from "../../assets/icons/create-light.png";
import "../../sass/global.css";
import "../../sass/games/edit.css";

export function EditGames() {
    const navigate = useNavigate();
    const [selectedDices, setSelectedDices] = useState([]);

    const toggleDiceSelection = (dice) => {
        setSelectedDices((prev) =>
            prev.includes(dice) ? prev.filter((d) => d !== dice) : [...prev, dice]
        );
    };

    return (
        <div>
            {/* APP TITLE */}
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="Diceverse Logo" />
            </div>

            {/* MAIN CONTENT */}
            <section className="main-content">
                <div className="main-content-header">
                    <img src={gamesIcon} alt="Games Icon" />
                    <h2>Edit Game</h2>
                </div>

                <div className="game-form">
                    <input type="text" placeholder="Name" className="game-name-input" />

                    <div className="dice-selection">
                        <h3>Dices for this game</h3>
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

                    <button className="confirm-game-btn" onClick={() => navigate("/pages/games/index")}>
                        <img src={createIcon} alt="Edit Game" />
                        Confirm
                    </button>
                </div>
            </section>
        </div>
    );
}