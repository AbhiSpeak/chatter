import { useState } from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
