import { useState } from "react";
import Dice from "../../components/Dice";
import "../../sass/games/play.css";
import rollIcon from "../../assets/icons/roll-light.png";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";

export function Play() {
  const [dices, setDices] = useState([
    {
      id: 1,
      options: [1, 2, 3, 4, 5, 6],
      type: "number",
      isSelected: false,
      currentValue: 1,
    },
    {
      id: 2,
      options: [1, 2, 3, 4, 5, 6],
      type: "number",
      isSelected: false,
      currentValue: 2,
    },
    {
      id: 3,
      options: [1, 2, 3, 4, 5, 6],
      type: "number",
      isSelected: false,
      currentValue: 3,
    },
    {
      id: 4,
      options: ["Beso", "Abrazo", "Caricia"],
      type: "text",
      isSelected: false,
      currentValue: "Beso",
    },
    {
      id: 5,
      options: ["Mejilla", "Labios", "Cuello"],
      type: "text",
      isSelected: false,
      currentValue: "Labios",
    },
  ]);

  const [name, setName] = useState("La vaca lola");

  // Función para seleccionar/deseleccionar un dice
  function toggleSeleccion(id) {
    setDices(
      dices.map((dice) =>
        dice.id === id ? { ...dice, isSelected: !dice.isSelected } : dice
      )
    );
  }

  // Función para tirar los dices isSelecteds
  function rollDices() {
    setDices(
      dices.map((dice) =>
        dice.isSelected
          ? {
              ...dice,
              currentValue:
                dice.options[Math.floor(Math.random() * dice.options.length)],
            }
          : dice
      )
    );
  }

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
          <h2>{name}</h2>
        </div>

        <div className="dices-container">
          {dices.map((dice) => (
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
