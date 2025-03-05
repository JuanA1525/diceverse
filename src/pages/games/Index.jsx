import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import diceIcon from "../../assets/icons/dice.png";
import gamesIcon from "../../assets/icons/games.png";
import homeIcon from "../../assets/icons/home.png";
import quickGameIcon from "../../assets/icons/flash.png";
import helpIcon from "../../assets/icons/help.png";
import createIcon from "../../assets/icons/create-light.png";
import "../../sass/global.css";
import "../../sass/games/index.css";
import { Game } from "../../components/Game";

export function Games() {
    const games = [
        "Custom Game 1",
        "Custom Game 2",
        "Custom Game 3",
        "Custom Game 4",
        "Custom Game 5",
        "Custom Game 6",
    ];

    return (
        <div>

            {/* App Title */}
            <div className="app-title">
                <h1>Diceverse</h1>
                <img src={logo} alt="logo" />
            </div>

            {/* Main Content */}
            <section className="main-content">
                <div className="main-content-header">
                    <img src={gamesIcon} alt="games-icon" />
                    <h2>My Games</h2>
                </div>

                <div className="main-content-games">
                    {games.map((game, index) => (
                        <Game key={index} page="/pages/games/edit" name={game} imgSrc={diceIcon} imgAlt="dice-icon" />
                    ))}
                </div>

                <Link to="/pages/games/create" className="create-button">
                    Create Game <img src={createIcon} alt="create-icon" />
                </Link>
            </section>
        </div>
    );
}

