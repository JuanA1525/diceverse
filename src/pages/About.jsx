import { Link } from 'react-router-dom'

export function About() {
    return (
        <div className="container">
            <h1>Acerca de DiceVerse</h1>
            <p>Somos una aplicación dedicada a los amantes de los juegos de dados.</p>
            <p>Versión 1.0.0</p>
            <nav>
                <Link to="/" className="nav-link">Volver al inicio</Link>
            </nav>
        </div>
    )
}