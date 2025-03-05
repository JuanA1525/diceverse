import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../sass/global.css";
import "../../sass/dices/edit.css";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import createIcon from "../../assets/icons/create-light.png";
import { SwipeableOption } from '../../components/SwipeableOption'

export function EditDice() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [diceName, setDiceName] = useState("");
    const [options, setOptions] = useState([]);
    const [newOption, setNewOption] = useState("");

    useEffect(() => {
        const dices = JSON.parse(localStorage.getItem('dices') || '[]');
        const dice = dices.find(d => d.id === id);
        if (dice) {
            setDiceName(dice.id);
            setOptions(dice.options);
        }
    }, [id]);

    const addOption = () => {
        if (newOption.trim()) {
            setOptions([...options, newOption]);
            setNewOption("");
        }
    };

    const deleteDice = () => {
        if (window.confirm('Are you sure you want to delete this dice?')) {
            const dices = JSON.parse(localStorage.getItem('dices') || '[]');
            const updatedDices = dices.filter(dice => dice.id !== id);
            localStorage.setItem('dices', JSON.stringify(updatedDices));
            navigate("/pages/dices/index");
        }
    };

    const updateDice = () => {
        const dices = JSON.parse(localStorage.getItem('dices') || '[]');
        // Check if another dice already has this name (except current dice)
        const isDuplicateName = dices.some(dice =>
            dice.id === diceName && dice.id !== id
        );

        if (isDuplicateName) {
            alert('A dice with this name already exists!');
            return;
        }

        const updatedDices = dices.map(dice =>
            dice.id === id ? {
                ...dice,
                id: diceName,
                options
            } : dice
        );
        localStorage.setItem('dices', JSON.stringify(updatedDices));
        navigate("/pages/dices/index");
    };

    const deleteOption = (index) => {
        setOptions(options.filter((_, i) => i !== index))
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
                    <h2>Edit Dice</h2>
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

                    <div className="button-group">
                        <button className="update-dice-btn" onClick={updateDice}>
                            <img src={createIcon} alt="Update Dice" />
                            Update Dice
                        </button>
                        <button className="delete-dice-btn" onClick={deleteDice}>
                            Delete Dice
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}