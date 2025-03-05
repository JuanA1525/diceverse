import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import "../sass/global.css";

export function Game({ name, dices }) {
    const navigate = useNavigate()
    const [isSwiping, setIsSwiping] = useState(false)

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setIsSwiping(false)
            navigate(`/pages/games/edit/${name}`)
        },
        onSwiping: (e) => {
            if (e.dir === 'Left') setIsSwiping(true)
        },
        onSwiped: () => setIsSwiping(false),
        trackMouse: true,
        delta: 50
    })

    const handleClick = () => {
        navigate(`/pages/games/play/${name}`)
    }

    return (
        <div {...handlers} className="game-card-container">
            <div
                className={`game-card ${isSwiping ? 'swiping' : ''}`}
                onClick={handleClick}
            >
                <h3>{name}</h3>
            </div>
            {isSwiping && <div className="edit-indicator">Edit</div>}
        </div>
    )
}

Game.propTypes = {
    name: PropTypes.string.isRequired,
    dices: PropTypes.array.isRequired,
};