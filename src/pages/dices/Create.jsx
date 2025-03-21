import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../sass/global.sass";
import "../../sass/dices/create.sass";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import flashIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import createIcon from "../../assets/icons/create-light.png";
import { SwipeableOption } from "../../components/SwipeableOption";
import Swal from "sweetalert2";

export function CreateDices() {
  const [diceName, setDiceName] = useState("");
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const navigate = useNavigate();

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const deleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const determineType = (options) => {
    return options.every((opt) => !isNaN(opt)) ? "number" : "text";
  };

  const createDice = () => {
    const dices = JSON.parse(localStorage.getItem("dices") || "[]");

    // Check if a dice with this name already exists
    if (dices.some((dice) => dice.id === diceName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        iconHtml:
          "<img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTU0OTJldmltdGFjNHlnczc0b25zYWRpbDhlNTBmYXRvanB5cjJiZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/giphy.gif'/>",
        text: "A dice with this name already exists!",
      });
      return;
    }

    const processedOptions =
      determineType(options) === "number"
        ? options.map((opt) => Number(opt))
        : options;

    if (!diceName.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        iconHtml: "🎲",
        text: "Please enter a name for the dice!",
      });
      return;
    }

    const newDice = {
      id: diceName,
      options: processedOptions,
      isSelected: false,
      type: determineType(options),
      isShown: true,
      currentValue: processedOptions[0],
    };

    localStorage.setItem("dices", JSON.stringify([...dices, newDice]));
    navigate("/pages/dices/index");
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
        <div className="main-content__header">
          <img src={diceIcon} alt="Dice Icon" />
          <h2>Create Dice</h2>
        </div>

        <div className="dice-form">
          <input
            type="text"
            placeholder="Name"
            className="dice-name-input"
            value={diceName}
            onChange={(e) => setDiceName(e.target.value)}
          />

          <div className="options-container">
            <label>Options...</label>
            <div className="option-input-group">
              <input
                type="text"
                placeholder="Add option"
                className="option-input"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
              />
              <button className="add-option-btn" onClick={addOption}>
                <img src={createIcon} alt="Add option" />
              </button>
            </div>
            <div className="options-list">
              {options.map((option, index) => (
                <SwipeableOption
                  key={index}
                  option={option}
                  onDelete={() => deleteOption(index)}
                />
              ))}
            </div>
          </div>

          <button className="create-dice-btn" onClick={createDice}>
            Create Dice
            <img src={createIcon} alt="Create Dice" />
          </button>
        </div>
      </section>
    </div>
  );
}
