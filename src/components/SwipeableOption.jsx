import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'

export function SwipeableOption({ option, onDelete }) {
    const [isSwiping, setIsSwiping] = useState(false)

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setIsSwiping(false)
            onDelete()
        },
        onSwiping: (e) => {
            if (e.dir === 'Left') {
                setIsSwiping(true)
            }
        },
        onSwiped: () => setIsSwiping(false),
        trackMouse: true,
        delta: 50
    })

    return (
        <div {...handlers} className="option-card-container">
            <div className={`option-card ${isSwiping ? 'swiping' : ''}`}>
                {option}
            </div>
            <div className="delete-indicator">
                Delete
            </div>
        </div>
    )
}

SwipeableOption.propTypes = {
    option: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onDelete: PropTypes.func.isRequired
}