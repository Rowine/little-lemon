import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import Confirmation from './pages/Confirmation'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
