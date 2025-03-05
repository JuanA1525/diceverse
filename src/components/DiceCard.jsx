import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function DiceCard({ id }) {
    return (
        <Link to={`/pages/dices/edit/${id}`} className="dice-card">
            <h3>{id}</h3>
        </Link>
    );
}

DiceCard.propTypes = {
    id: PropTypes.string.isRequired
};
