import { Link } from "react-router-dom";

import React from "react";
import "../sass/global.css";
import "../sass/index.css";
import diceIcon from "../assets/icons/dice.png";
import gamesIcon from "../assets/icons/games.png";
import homeIcon from "../assets/icons/home.png";
import flashIcon from "../assets/icons/flash.png";
import helpIcon from "../assets/icons/help.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/pages/dices/index">
        <img src={diceIcon} alt="dice-icon" />
      </Link>
      <Link to="/pages/games/index">
        <img src={gamesIcon} alt="games-icon" />
      </Link>
      <Link to="/">
        <img src={homeIcon} alt="home-icon" />
      </Link>
      <Link to="/quickgame">
        <img src={flashIcon} alt="quickgame-icon" />
      </Link>
      <Link to="/pages/help/index">
        <img src={helpIcon} alt="help-icon" />
      </Link>
    </nav>
  );
}
