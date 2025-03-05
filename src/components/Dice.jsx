import { useState } from "react";

export function Dice({ name, initFaces, roll }) {
    const [isSelected, setIsSelected] = useState(false);
    const diceClassName = isSelected ? 'dice selected' : 'dice';

    const [face, setFace] = useState(initFaces);

    const rollDice = () => {
        const randomFace = Math.floor(Math.random() * face) + 1;
        setFace(randomFace);
    };

    return (
        <div className={diceClassName} onClick={() => setIsSelected(!isSelected)}>
            <h2>{name}</h2>
            <h3>caras: {face}</h3>
        </div>
    );
}