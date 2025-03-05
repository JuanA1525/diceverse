import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Dices } from "./pages/dices/Index";
import { CreateDices } from "./pages/dices/Create";
import { Games } from "./pages/games/Index";
import { CreateGames } from "./pages/games/Create";
import { QuickGameCreate } from "./pages/quick_game/Create";
import { QuickGamePlay } from "./pages/quick_game/Play";
import "./App.css";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/* Dices */}
          <Route path="/pages/dices/index" element={<Dices />} />
          <Route path="/pages/dices/create" element={<CreateDices />} />

          {/* Games */}
          <Route path="/pages/games/index" element={<Games />} />
          <Route path="/pages/games/create" element={<CreateGames />} />

          {/* Quick Game */}
          <Route path="/quick_game/create" element={<QuickGameCreate />} />
          <Route path="/quick_game/play" element={<QuickGamePlay />} />

          {/* Help */}
        </Routes>
      </div>
    </>
  );
}

export default App;
