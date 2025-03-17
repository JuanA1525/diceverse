import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import flashIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import logo from "../../assets/logo.png";
import createIcon from "../../assets/icons/create-light.png";
import "../../sass/global.sass";
import "../../sass/games/create.sass";
import { SelectableDice } from "../../components/SelectableDice";

export function CreateGames() {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState("");
  const [selectedDices, setSelectedDices] = useState([]);
  const [availableDices, setAvailableDices] = useState([]);

  useEffect(() => {
    const dices = JSON.parse(localStorage.getItem("dices") || "[]");
    setAvailableDices(dices.filter((dice) => dice.isShown));
  }, []);

  const toggleDiceSelection = (dice) => {
    setSelectedDices((prev) =>
      prev.includes(dice) ? prev.filter((d) => d !== dice) : [...prev, dice]
    );
  };

  const createGame = () => {
    if (!gameName.trim()) {
      alert("Please enter a game name");
      return;
    }

    if (selectedDices.length === 0) {
      alert("Please select at least one dice");
      return;
    }

    const games = JSON.parse(localStorage.getItem("games") || "[]");

    if (games.some((game) => game.name === gameName)) {
      alert("A game with this name already exists!");
      return;
    }

    const newGame = {
      name: gameName,
      dices: selectedDices,
      isShown: true,
    };

    localStorage.setItem("games", JSON.stringify([...games, newGame]));
    navigate("/pages/games/index");
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
        <div className="main-content-header">
          <img src={gamesIcon} alt="Games Icon" />
          <h2>Create Game</h2>
        </div>

        <div className="game-form">
          <input
            type="text"
            placeholder="Name"
            className="game-name-input"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />

          <div className="dice-selection">
            <h3>Select dices for this game</h3>
            <div className={availableDices.length > 0 ? "dice-grid" : ""}>
              {availableDices.length > 0 ? (
                availableDices.map((dice) => (
                  <SelectableDice
                    key={dice.id}
                    id={dice.id}
                    isSelected={selectedDices.includes(dice)}
                    onClick={() => toggleDiceSelection(dice)}
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
          </div>

          <button className="create-game-btn" onClick={createGame}>
            <img src={createIcon} alt="Create Game" />
            Create Game
          </button>
        </div>
      </section>
    </div>
  );
}
