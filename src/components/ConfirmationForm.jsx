import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import './styles/ConfirmationForm.css'

const ConfirmationForm = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [diners, setDiners] = useState('1')
  const [location, setLocation] = useState('')
  const [occasion, setOccasion] = useState('None')
  const [requests, setRequests] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('Date')) {
      setDate(localStorage.getItem('Date'))
      setTime(localStorage.getItem('Time'))
      setDiners(localStorage.getItem('Diners'))
      setLocation(localStorage.getItem('Location'))
      setOccasion(localStorage.getItem('Occasion'))
      setRequests(localStorage.getItem('Requests'))
    } else {
      navigate('/reservations')
    }

    console.log(requests)
  }, [date, time, diners, location, occasion, requests, navigate])

  return (
    <>
      <Header step1 step2 />
      <div className='confirmation-container'>
        <div className='header-container'>
          <h1>Confirm Details</h1>
          <button className='back-button'>
            <Link to={'/reservations'}>Go back</Link>
          </button>
        </div>
        <div className='details-container'>
          <div className='text-container'>
            <h3>Date:</h3>
            <p>{date}</p>
          </div>
          <div className='text-container'>
            <h3>Time:</h3>
            <p>{time}</p>
          </div>
          <div className='text-container'>
            <h3>Number of Diners:</h3>
            <p>{diners}</p>
          </div>
          <div className='text-container'>
            <h3>Location:</h3>
            <p>{location}</p>
          </div>
          <div className='text-container'>
            <h3>Occasion:</h3>
            <p>{occasion}</p>
          </div>
          {requests && (
            <div className='text-container'>
              <h3>Comments:</h3>
              <p>{requests}</p>
            </div>
          )}

          <button className='confirm-button' aria-label='confirm-button'>
            <Link to={'/pay'}>Proceed to Payment</Link>
          </button>
        </div>
      </div>
    </>
  )
}
export default ConfirmationForm
