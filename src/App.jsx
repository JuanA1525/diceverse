import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Dices } from './pages/dices/Index'
import { CreateDices } from './pages/dices/Create'
import { Games } from './pages/games/Index'
import { CreateGames } from './pages/games/Create'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
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
