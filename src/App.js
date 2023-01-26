import { useReducer } from 'react'
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reservations from './pages/Reservations'
import Confirmation from './pages/Confirmation'
import Pay from './pages/Pay'
import Success from './pages/Success'

import { Route, Routes, useNavigate } from 'react-router-dom'
import { fetchAPI, submitAPI } from './fetchData'

export const updateTimes = (state, action) => {
  state = fetchAPI(action.payload)
  return state
}

export const initializeTimes = () => {
  const currentDate = new Date()
  const data = fetchAPI(currentDate)

  return data
}

const App = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes())
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const response = submitAPI(formData)
    if (response) {
      localStorage.setItem('Date', formData.date)
      localStorage.setItem('Time', formData.time)
      localStorage.setItem('Diners', formData.diners)
      localStorage.setItem('Location', formData.location)
      localStorage.setItem('Occasion', formData.occasion)
      localStorage.setItem('Requests', formData.requests)
      navigate('/confirmation')
    } else {
      console.log('Not working')
    }
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route
          path='/reservations'
          element={
            <Reservations values={[state, dispatch]} submitForm={submitForm} />
          }
        />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
