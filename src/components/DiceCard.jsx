import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import diceIcon from '../assets/icons/dice.png'

export function DiceCard({ id }) {
    return (
        <Link to={`/pages/dices/edit/${id}`} className="dice-card">
            <h3>{id}</h3>
            <img src={diceIcon} alt={`Dice ${id}`} />
        </Link>
    )
}

DiceCard.propTypes = {
    id: PropTypes.string.isRequired
}