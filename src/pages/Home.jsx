import { Link } from 'react-router-dom'

export function Home() {
    return (
        <div className="container">
            <h1>Bienvenido a DiceVerse</h1>
            <p>Tu plataforma de juegos de dados</p>
            <nav>
                <Link to="/about" className="nav-link">Conoce más sobre nosotros</Link>
            </nav>
        </div>
    )
}