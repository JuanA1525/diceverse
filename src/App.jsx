import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Dices } from "./pages/dices/Index";
import { CreateDices } from "./pages/dices/Create";
import { EditDice } from "./pages/dices/Edit";
import { Games } from "./pages/games/Index";
import { CreateGames } from "./pages/games/Create";
import { EditGames } from "./pages/games/Edit";
import { QuickGameCreate } from "./pages/quick_game/Create";
import { QuickGamePlay } from "./pages/quick_game/Play";
import { Help } from "./pages/help/Index";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Play } from "./pages/games/Play";

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
          <Route path="/pages/dices/edit/:id" element={<EditDice />} />

          {/* Games */}
          <Route path="/pages/games/index" element={<Games />} />
          <Route path="/pages/games/create" element={<CreateGames />} />
          <Route path="/pages/games/edit/:name" element={<EditGames />} /> {/* Updated */}
          <Route path="/pages/games/play/:name" element={<Play />} /> {/* Updated */}

          {/* Quick Game */}
          <Route path="/quick_game/create" element={<QuickGameCreate />} />
          <Route path="/quick_game/play" element={<QuickGamePlay />} />

          {/* Help */}
          <Route path="/pages/help/index" element={<Help />} />

          {/* Play Game */}
          <Route path="/pages/games/play" element={<Play />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
