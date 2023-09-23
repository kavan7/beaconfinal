import { useState } from 'react'
import { About, Beardle, Contact, Landing, Members, Navbar } from './components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0  bg-hero-pattern bg-white">
      <div className="bg-cover bg-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/beardle" element={<Beardle />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
