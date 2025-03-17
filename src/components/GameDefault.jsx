import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../sass/global.sass";

export function GameDefault({ page, name, imgSrc, imgAlt }) {
    return (
        <Link to={page} className="game-card">
            <h3>{name}</h3>
            <img src={imgSrc} alt={imgAlt} />
        </Link>
    );
}

GameDefault.propTypes = {
    page: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
};