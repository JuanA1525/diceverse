import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../sass/global.css";
import "../../sass/quick_game/create.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import createIcon from "../../assets/icons/create-light.png";

export function QuickGameCreate() {
    const [diceName, setDiceName] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");
    const navigate = useNavigate();

    const addOption = () => {
        if (newOption.trim()) {
            setOptions([...options, newOption]);
            setNewOption("");
        }
    };

    const createDice = () => {
        console.log("Creating Quick Game:", { name: diceName, options });
        navigate("/pages/quick_game/play");
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
                <div className="main-content__header">
                    <img src={diceIcon} alt="Dice Icon" />
                    <h2>Quick Game</h2>
                </div>

                <div className="dice-form">
                    <input
                        type="text"
                        placeholder="Name"
                        className="dice-name-input"
                        value={diceName}
                        onChange={(e) => setDiceName(e.target.value)}
                    />

                    <div className="options-container">
                        <label>Options...</label>
                        <div className="option-input-group">
                            <input
                                type="text"
                                placeholder="Add option"
                                className="option-input"
                                value={newOption}
                                onChange={(e) => setNewOption(e.target.value)}
                            />
                            <button className="add-option-btn" onClick={addOption}>
                                <img src={createIcon} alt="Add option" />
                            </button>
                        </div>
                        <div className="options-list">
                            {options.map((option, index) => (
                                <div key={index} className="option-card">{option}</div>
                            ))}
                        </div>
                    </div>

                    <button className="create-dice-btn" onClick={createDice}>
                        <img src={createIcon} alt="Create Dice" />
                        Create
                    </button>
                </div>
            </section>
        </div>
    );
}
