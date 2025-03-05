import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dice from "../../components/Dice";
import "../../sass/global.css";
import "../../sass/quick_game/play.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import rollIcon from "../../assets/icons/roll-light.png";
import Swal from 'sweetalert2' // You'll need to install this: npm install sweetalert2

export function QuickGamePlay() {
    const navigate = useNavigate();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const games = JSON.parse(localStorage.getItem("games") || "[]");
        const quickGame = games.find(g => g.isQuick);

        if (!quickGame) {
            navigate("/quick_game/create");
            return;
        }

        const dices = JSON.parse(localStorage.getItem("dices") || "[]");
        const updatedDices = quickGame.dices.map(gameDice => {
            const latestDice = dices.find(d => d.id === gameDice.id);
            return {
                ...(latestDice || gameDice),
                isSelected: false,
                currentValue: (latestDice || gameDice).options[0]
            };
        });

        setGame({
            ...quickGame,
            dices: updatedDices
        });
    }, [navigate]);

    function toggleSeleccion(id) {
        if (!game) return;
        setGame({
            ...game,
            dices: game.dices.map((dice) =>
                dice.id === id ? { ...dice, isSelected: !dice.isSelected } : dice
            ),
        });
    }

    function rollDices() {
        if (!game) return;
        const hasSelectedDices = game.dices.some(dice => dice.isSelected);

        setGame({
            ...game,
            dices: game.dices.map((dice) => {
                if (!hasSelectedDices || dice.isSelected) {
                    const randomIndex = Math.floor(Math.random() * dice.options.length);
                    const newValue = dice.options[randomIndex];

                    if (dice.isRoulette) {
                        // Show alert for rolled option
                        Swal.fire({
                            title: 'Option Rolled!',
                            text: `The option rolled was: ${newValue}`,
                            icon: 'info',
                            timer: 2000,
                            showConfirmButton: false
                        });

                        // Remove the rolled option in roulette mode
                        const newOptions = dice.options.filter((_, i) => i !== randomIndex);

                        // Check if this was the last option
                        if (newOptions.length === 0) {
                            Swal.fire({
                                title: 'Quick Game Done!',
                                text: 'Thanks for playing Diceverse!',
                                icon: 'success',
                                confirmButtonText: 'Finish'
                            }).then(() => {
                                finishGame();
                            });
                        }

                        return {
                            ...dice,
                            options: newOptions,
                            currentValue: newValue
                        };
                    }

                    return {
                        ...dice,
                        currentValue: newValue
                    };
                }
                return dice;
            }),
        });
    }

    function finishGame() {
        // Remove quick game and its dice
        const games = JSON.parse(localStorage.getItem("games") || "[]");
        const dices = JSON.parse(localStorage.getItem("dices") || "[]");

        localStorage.setItem('games', JSON.stringify(games.filter(g => !g.isQuick)));
        localStorage.setItem('dices', JSON.stringify(dices.filter(d => d.isShown)));

        navigate("/");
    }

    if (!game) {
        return <div>Loading quick game...</div>;
    }

    return (
        <div>
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="Diceverse Logo" />
            </div>

            <section className="main-content">
                <div className="main-content__header">
                    <img src={diceIcon} alt="Dice Icon" />
                    <div className="header-text">
                        <h2>Quick Game!</h2>
                        <h3>{game.dices[0].id}</h3>
                    </div>
                </div>

                <div className="dices-container">
                    {game.dices.map((dice) => (
                        <Dice
                            key={dice.id}
                            {...dice}
                            toggleSeleccion={toggleSeleccion}
                        />
                    ))}
                </div>

                <div className="button-group">
                    <button onClick={rollDices} className="roll-button">
                        Roll Dices <img src={rollIcon} alt="Roll Icon" />
                    </button>
                    <button onClick={finishGame} className="finish-button">
                        Finish Game
                    </button>
                </div>
            </section>
        </div>
    );
}