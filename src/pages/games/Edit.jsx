import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gamesIcon from "../../assets/icons/games.png";
import logo from "../../assets/logo.png";
import createIcon from "../../assets/icons/create-light.png";
import "../../sass/global.sass";
import "../../sass/games/edit.sass";
import { SelectableDice } from "../../components/SelectableDice";

export function EditGames() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [gameName, setGameName] = useState("");
  const [selectedDices, setSelectedDices] = useState([]);
  const [availableDices, setAvailableDices] = useState([]);

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem("games") || "[]");
    const dices = JSON.parse(localStorage.getItem("dices") || "[]");
    const currentGame = games.find((g) => g.name === name);

    if (currentGame) {
      setGameName(currentGame.name);
      setSelectedDices(currentGame.dices);
    }

    // Filter only visible dices
    setAvailableDices(dices.filter((dice) => dice.isShown));
  }, [name]);

  const toggleDiceSelection = (dice) => {
    setSelectedDices((prev) =>
      prev.some((d) => d.id === dice.id)
        ? prev.filter((d) => d.id !== dice.id)
        : [...prev, dice]
    );
  };

  const deleteGame = () => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      const games = JSON.parse(localStorage.getItem("games") || "[]");
      const updatedGames = games.filter((game) => game.name !== name);
      localStorage.setItem("games", JSON.stringify(updatedGames));
      navigate("/pages/games/index");
    }
  };

  const updateGame = () => {
    if (selectedDices.length === 0) {
      alert("Please select at least one dice");
      return;
    }

    const games = JSON.parse(localStorage.getItem("games") || "[]");

    if (games.some((game) => game.name === gameName && game.name !== name)) {
      alert("A game with this name already exists!");
      return;
    }

    const updatedGames = games.map((game) =>
      game.name === name
        ? {
          ...game,
          name: gameName,
          dices: selectedDices,
          isShown: true,
        }
        : game
    );

    localStorage.setItem("games", JSON.stringify(updatedGames));
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
          <h2>Edit Game</h2>
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
            <h3>Dices for this game</h3>
            <div className="dice-grid">
              {availableDices.map((dice) => (
                <SelectableDice
                  key={dice.id}
                  id={dice.id}
                  isSelected={selectedDices.some((d) => d.id === dice.id)}
                  onClick={() => toggleDiceSelection(dice)}
                />
              ))}
            </div>
          </div>

          <div className="button-group">
            <button className="delete-game-btn" onClick={deleteGame}>
              Delete Game
            </button>
            <button className="update-game-btn" onClick={updateGame}>
              Update Game
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
