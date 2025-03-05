import React from "react";
import { Link } from "react-router-dom";
import "../sass/global.css";

export function Game({ page, name, imgSrc, imgAlt }) {
    return (
        <Link to={page} className="game-card">
            <h3>{name}</h3>
            <img src={imgSrc} alt={imgAlt} />
        </Link>
    );
}