import { Link } from 'react-router-dom'

import React from "react";
import "../sass/global.css";
import "../sass/index.css";
import logo from "../assets/logo.png";
import diceIcon from "../assets/icons/dice.png";
import gamesIcon from "../assets/icons/games.png";
import homeIcon from "../assets/icons/home.png";
import flashIcon from "../assets/icons/flash.png";
import helpIcon from "../assets/icons/help.png";
import kissIcon from "../assets/icons/kiss.png";
import { Game } from "../components/Game";

export function Home() {
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
                    <img src={gamesIcon} alt="Games Icon" />
                    <h2>Main Games</h2>
                </div>
                <div className="main-content__games">
                    <Game page="/games/classic" name="Classic Game" imgSrc={diceIcon} imgAlt="Classic Game" />
                    <Game page="/games/cacho" name="Cacho Game" imgSrc={diceIcon} imgAlt="Cacho Game" />
                    <Game page="/games/adult" name="Adult Game" imgSrc={kissIcon} imgAlt="Adult Game" />
                    <h2>And more coming...</h2>
                </div>
            </section>

            <h3 className="copyright">Diceverse &copy; 2025. All rights reserved.</h3>
        </div>
    );
}


