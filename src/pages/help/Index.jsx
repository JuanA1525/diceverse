import { Link } from 'react-router-dom'

import React from "react";
import "../../sass/global.css";
import "../../sass/help/index.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import helpIcon from "../../assets/icons/help.png";
import kissIcon from "../../assets/icons/kiss.png";

export function Help() {
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
                    <img src={helpIcon} alt="Games Icon" />
                    <h2>Help & FAQ</h2>
                </div>
                <div className="text-content">
                    <h3>How to Play</h3>
                    <p>Roll the dice and see what you get! You can play alone or with friends. The player with the highest score wins.</p>
                    <br />
                    <h3>How to Win</h3>
                    <p>Roll the dice and see what you get! You can play alone or with friends. The player with the highest score wins.</p>
                    <br />
                    <h3>How to Score</h3>
                    <p>Roll the dice and see what you get! You can play alone or with friends. The player with the highest score wins.</p>
                </div>
            </section>
        </div>
    );
}


