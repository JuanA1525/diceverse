import { Link } from 'react-router-dom'

export function NotFound() {
    return (
        <div className="container">
            <h1>404: Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <nav>
                <Link to="/" className="nav-link">Volver al inicio</Link>
            </nav>
        </div>
    )
}