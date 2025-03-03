import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";
import "../../css/dices/index.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import flashIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import createIcon from "../../assets/icons/create-light.png";

export function Dices() {
    return (
        <div>
            {/* BOTTOM NAVIGATION */}
            <nav className="navbar">
                <Link to="#">
                    <img src={diceIcon} alt="dice-icon" />
                </Link>
                <Link to="/pages/games/mygames">
                    <img src={gamesIcon} alt="games-icon" />
                </Link>
                <Link to="/">
                    <img src={homeIcon} alt="home-icon" />
                </Link>
                <Link to="#">
                    <img src={flashIcon} alt="quickgame-icon" />
                </Link>
                <Link to="#">
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
                <div className="main-content__header">
                    <img src={diceIcon} alt="Dice Icon" />
                    <h2>My Dices</h2>
                </div>
                <div className="main-content__dices">
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 1</h3>
                        <img src={diceIcon} alt="Classic Dice 1" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 2</h3>
                        <img src={diceIcon} alt="Classic Dice 2" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 3</h3>
                        <img src={diceIcon} alt="Classic Dice 3" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 4</h3>
                        <img src={diceIcon} alt="Classic Dice 4" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 5</h3>
                        <img src={diceIcon} alt="Classic Dice 5" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 6</h3>
                        <img src={diceIcon} alt="Classic Dice 6" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 7</h3>
                        <img src={diceIcon} alt="Classic Dice 7" />
                    </Link>
                    <Link to="#" className="dice-card">
                        <h3>Classic Dice 8</h3>
                        <img src={diceIcon} alt="Classic Dice 8" />
                    </Link>
                </div>
                <Link to="/pages/dices/create" className="create-button">
                    Create dice <img src={createIcon} alt="Create Icon" />
                </Link>
            </section>
        </div>
    );
}
