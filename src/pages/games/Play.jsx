import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dice from "../../components/Dice";
import "../../sass/games/play.sass";
import rollIcon from "../../assets/icons/roll-light.png";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import Swal from "sweetalert2";

export function Play() {
  const { name } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem("games") || "[]");
    const dices = JSON.parse(localStorage.getItem("dices") || "[]");
    const currentGame = games.find((g) => g.name === name);

    if (currentGame) {
      const updatedDices = currentGame.dices.map((gameDice) => {
        const latestDice = dices.find((d) => d.id === gameDice.id);
        if (!latestDice) return gameDice;

        return {
          ...latestDice,
          isSelected: false,
          currentValue: latestDice.currentValue || latestDice.options[0],
        };
      });

      setGame({
        ...currentGame,
        dices: updatedDices,
      });
    }
  }, [name]);

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

    // Check if any dice is selected
    const hasSelectedDices = game.dices.some((dice) => dice.isSelected);

    if (!hasSelectedDices) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select at least one dice to roll!",
      });
      return;
    }

    //Rolling dices alert
    Swal.fire({
      title: "Rolling dices...",
      text: "Wait a moment while we roll the dices for you!",
      icon: "info",
      iconHtml:
        '<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmE0MGJoN3FhMDB2dWVxa3hobjJyanBvY3J4MHkybmhuZzhlYmwxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OOn7N4CfPuUTmNqFD7/giphy.gif" width="100px" />',
      timer: 1000,
      showConfirmButton: false,
    });

    setGame({
      ...game,
      dices: game.dices.map((dice) => {
        // If some are selected, only roll selected ones
        if (!hasSelectedDices || dice.isSelected) {
          return {
            ...dice,
            currentValue:
              dice.options[Math.floor(Math.random() * dice.options.length)],
          };
        }

        return dice;
      }),
    });
  }

  if (!game) {
    return <div>Loading game {name}...</div>;
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
          <h2>{game.name}</h2>
        </div>

        <div className="dices-container">
          {game.dices.map((dice) => (
            <Dice key={dice.id} {...dice} toggleSeleccion={toggleSeleccion} />
          ))}
        </div>
        <button onClick={rollDices} className="roll-button">
          Roll Dices <img src={rollIcon} alt="Roll Icon" />
        </button>
      </section>
    </div>
  );
}
