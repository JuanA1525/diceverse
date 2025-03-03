import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Dices } from './pages/dices/Dices'
import { CreateDices} from './pages/dices/CreateDices'
import { Games } from './pages/games/Games'
import { CreateGames } from './pages/games/CreateGames'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        {/* Dices */}
        <Route path="/pages/dices/index" element={<Dices />} />
        <Route path="/pages/dices/create" element={<CreateDices />} />

        {/* Games */}
        <Route path="/pages/games/mygames" element={<Games />} />
        <Route path="/pages/games/create" element={<CreateGames />} />
      </Routes>
    </div>
  )
}

export default App
