import React, { useEffect, useState } from "react";
import "../sass/global.css";
import "../sass/index.css";
import logo from "../assets/logo.png";
import diceIcon from "../assets/icons/dice.png";
import gamesIcon from "../assets/icons/games.png";
import kissIcon from "../assets/icons/kiss.png";
import { GameDefault } from "../components/GameDefault";

const defaultDices = [
    { id: "Default Classic Game 1", options: [1, 2, 3, 4, 5, 6], isSelected: false, type: "number", isShown: false, currentValue: 1 },
    { id: "Default Classic Game 2", options: [1, 2, 3, 4, 5, 6], isSelected: false, type: "number", isShown: false, currentValue: 1 },
    { id: "Default Classic Game 3", options: [1, 2, 3, 4, 5, 6], isSelected: false, type: "number", isShown: false, currentValue: 1 },
    { id: "Default Cacho Game 1", options: ["Beso", "Abrazo", "Caricia"], isSelected: false, type: "text", isShown: false, currentValue: "Abrazo" },
    { id: "Default Cacho Game 2", options: ["Mejilla", "Labios", "Cuello"], isSelected: false, type: "text", isShown: false, currentValue: "Cuello" },
    { id: "Default Cacho Game 3", options: ["Suave", "Fuerte", "Lento"], isSelected: false, type: "text", isShown: false, currentValue: "Fuerte" },
    { id: "Default Adult Game 1", options: ["Sí", "No", "Tal vez"], isSelected: false, type: "text", isShown: false, currentValue: "Sí" },
    { id: "Default Adult Game 2", options: ["1 minuto", "5 minutos", "10 minutos"], isSelected: false, type: "text", isShown: false, currentValue: "1 minuto" },
    { id: "Default Adult Game 3", options: ["Cama", "Sofá", "Piso"], isSelected: false, type: "text", isShown: false, currentValue: "Piso" },
];

const defaultGames = [
    {
        name: "Classic Game",
        dices: defaultDices.slice(0, 3),
        isShown: false
    },
    {
        name: "Cacho Game",
        dices: defaultDices.slice(3, 6),
        isShown: false
    },
    {
        name: "Adult Game",
        dices: defaultDices.slice(6, 9),
        isShown: false
    }
];

export function Home() {
    useEffect(() => {
        // Initialize default dices if they don't exist
        const existingDices = JSON.parse(localStorage.getItem('dices') || '[]');
        const defaultDiceIds = defaultDices.map(d => d.id);
        const missingDices = defaultDices.filter(d => !existingDices.some(ed => ed.id === d.id));

        if (missingDices.length > 0) {
            localStorage.setItem('dices', JSON.stringify([...existingDices, ...missingDices]));
        }

        // Initialize default games if they don't exist
        const existingGames = JSON.parse(localStorage.getItem('games') || '[]');
        const defaultGameNames = defaultGames.map(g => g.name);
        const missingGames = defaultGames.filter(g => !existingGames.some(eg => eg.name === g.name));

        if (missingGames.length > 0) {
            localStorage.setItem('games', JSON.stringify([...existingGames, ...missingGames]));
        }
    }, []);

    return (
        <div>
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="Diceverse Logo" />
            </div>

            <section className="main-content">
                <div className="main-content__header">
                    <img src={gamesIcon} alt="Games Icon" />
                    <h2>Main Games</h2>
                </div>
                <div className="main-content__games">
                    <GameDefault
                        page="/pages/games/play/Classic Game"
                        name="Classic Game"
                        imgSrc={diceIcon}
                        imgAlt="Classic Game"
                    />
                    <GameDefault
                        page="/pages/games/play/Cacho Game"
                        name="Cacho Game"
                        imgSrc={diceIcon}
                        imgAlt="Cacho Game"
                    />
                    <GameDefault
                        page="/pages/games/play/Adult Game"
                        name="Adult Game"
                        imgSrc={kissIcon}
                        imgAlt="Adult Game"
                    />
                    <h2>And more coming...</h2>
                </div>
            </section>

            <h3 className="copyright">Diceverse &copy; 2025. All rights reserved.</h3>
        </div>
    );
}


