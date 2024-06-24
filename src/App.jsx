import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
