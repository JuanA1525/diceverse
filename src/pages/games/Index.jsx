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
import { useState, useEffect } from "react";

export function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("games") || "[]");
    setGames(savedGames.filter((game) => game.isShown));
  }, []);

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
          {games.length > 0 ? (
            games.map((game) => (
              <Game
                key={game.id}
                page={`/pages/games/play/${game.name}`}
                name={game.name}
                imgSrc={diceIcon}
                imgAlt={game.name}
              />
            ))
          ) : (
            <h2
              style={{
                textAlign: "center",
                width: "100%",
                padding: "1em",
                borderRadius: "0.5em",
                backgroundColor: "#aaa",
                color: "#fff",
                margin: "1em 0",
              }}
            >
              No games found
            </h2>
          )}
        </div>

        <Link to="/pages/games/create" className="create-button">
          Create Game <img src={createIcon} alt="create-icon" />
        </Link>
      </section>
    </div>
  );
}
