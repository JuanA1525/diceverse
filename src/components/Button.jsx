import { useState } from 'react'

function Button() {
    const [count, setCount] = useState('Follow')

    return (
        <>
            <button onClick={() => setCount(count == 'Follow' ? 'Unfollow' : 'Follow')}>
                {count}
            </button>
        </>
    )
}

export default Button
