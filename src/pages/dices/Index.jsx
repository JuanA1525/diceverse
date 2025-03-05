import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiceCard } from "../../components/DiceCard";
import "../../sass/global.css";
import "../../sass/dices/index.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import flashIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import createIcon from "../../assets/icons/create-light.png";

export function Dices() {
    const [dices, setDices] = useState([]);

    useEffect(() => {
        const savedDices = JSON.parse(localStorage.getItem('dices') || '[]');
        setDices(savedDices.filter(dice => dice.isShown)); // Only show dices with isShown true
    }, []);

    const handleDiceClick = (diceId) => {
        setDices(dices.map(dice => ({
            ...dice,
            isSelected: dice.id === diceId ? !dice.isSelected : dice.isSelected
        })));
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
                    <h2>My Dices</h2>
                </div>
                <div className="main-content__dices">
                    {dices.map((dice) => (
                        <DiceCard
                            key={dice.id}
                            id={dice.id}
                            onDiceClick={handleDiceClick}
                        />
                    ))}
                </div>
                <Link to="/pages/dices/create" className="create-button">
                    Create dice <img src={createIcon} alt="Create Icon" />
                </Link>
            </section>
        </div>
    );
}
