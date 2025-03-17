import React from 'react'
import PropTypes from 'prop-types'
import '../sass/components/selectable-dice.sass'

export function SelectableDice({ id, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`selectable-dice ${isSelected ? 'selected' : ''}`}
        >
            <h4>{id}</h4>
        </div>
    )
}

SelectableDice.propTypes = {
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}