import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/global.css";
import "../../sass/quick_game/create.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import createIcon from "../../assets/icons/create-light.png";
import { SwipeableOption } from '../../components/SwipeableOption';

export function QuickGameCreate() {
    const navigate = useNavigate();
    const [diceName, setDiceName] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");
    const [isRoulette, setIsRoulette] = useState(false);

    useEffect(() => {
        // Check if there's already a quick game
        const games = JSON.parse(localStorage.getItem('games') || '[]');
        const quickGame = games.find(game => !game.isShown);

        if (quickGame) {
            navigate("/quick_game/play");
        }
    }, [navigate]);

    const determineType = (options) => {
        return options.every(opt => !isNaN(opt)) ? "number" : "text";
    };

    const addOption = () => {
        if (newOption.trim()) {
            setOptions([...options, newOption]);
            setNewOption("");
        }
    };

    const deleteOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const createDice = () => {
        if (!diceName.trim()) {
            alert('Please enter a name for the dice');
            return;
        }

        if (options.length < 2) {
            alert('Please add at least 2 options');
            return;
        }

        const processedOptions = determineType(options) === "number"
            ? options.map(opt => Number(opt))
            : options;

        const newDice = {
            id: diceName,
            options: processedOptions,
            isSelected: false,
            type: determineType(options),
            isShown: false,
            currentValue: processedOptions[0],
            isRoulette
        };

        const dices = JSON.parse(localStorage.getItem('dices') || '[]');
        localStorage.setItem('dices', JSON.stringify([...dices, newDice]));

        const quickGame = {
            name: 'quick_game',
            dices: [newDice],
            isShown: false
        };

        const games = JSON.parse(localStorage.getItem('games') || '[]');
        localStorage.setItem('games', JSON.stringify([...games, quickGame]));

        navigate("/quick_game/play");
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
                                <SwipeableOption
                                    key={index}
                                    option={option}
                                    onDelete={() => deleteOption(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="create-group">
                        <div className="roulette-mode">
                            <input
                                type="checkbox"
                                id="roulette"
                                checked={isRoulette}
                                onChange={(e) => setIsRoulette(e.target.checked)}
                            />
                            <label htmlFor="roulette">Roulette Mode</label>
                        </div>

                        <button className="create-dice-btn" onClick={createDice}>
                            <img src={createIcon} alt="Create Dice" />
                            Create
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
