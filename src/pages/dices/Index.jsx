import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiceCard } from "../../components/DiceCard";
import "../../sass/global.sass";
import "../../sass/dices/index.sass";
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
        setDices(savedDices.filter(dice => dice.isShown));
    }, []);

    const handleDiceClick = (diceId) => {
        setDices(
            dices.map((dice) => ({
                ...dice,
                isSelected: dice.id === diceId ? !dice.isSelected : dice.isSelected,
            }))
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
                <div className="main-content__header">
                    <img src={diceIcon} alt="Dice Icon" />
                    <h2>My Dices</h2>
                </div>
                <div className="main-content__dices">
                    {dices.length > 0 ? (
                        dices.map((dice) => (
                            <DiceCard
                                key={dice.id}
                                id={dice.id}
                                onDiceClick={handleDiceClick}
                            />
                        ))
                    ) : (
                        <h2
                            style={{
                                textAlign: "center",
                                width: "100%",
                                padding: "1em",
                                borderRadius: "0.5em",
                                backgroundColor: "#aaa",
                                color: "#fff",
                                margin: "1em 0",
                            }}
                        >
                            No dices found
                        </h2>
                    )}
                </div>
                <Link to="/pages/dices/create" className="create-button">
                    Create dice <img src={createIcon} alt="Create Icon" />
                </Link>
            </section>
        </div>
    );
}
