import { useState, useEffect } from 'react'
import './styles/BookingForm.css'

const occasions = ['None', 'Birthday', 'Engagement', 'Anniversary']

const BookingForm = ({ values, submitForm }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('17:00')
  const [diners, setDiners] = useState('1')
  const [location, setLocation] = useState('')
  const [occasion, setOccasion] = useState('None')
  const [requests, setRequests] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm({ date, time, diners, location, occasion, requests })
  }

  const [availableTimes, dispatch] = values

  useEffect(() => {
    dispatch({ payload: date })
  }, [date, dispatch])

  return (
    <div className='reserve-container'>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label htmlFor='date'>
          Date:
          <input
            type='date'
            value={date.toISOString().substring(0, 10)}
            required
            onChange={(event) => setDate(new Date(event.target.value))}
            aria-label='date-input'
          />
        </label>
        <br />
        <label htmlFor='time'>
          Time:
          <select
            value={time}
            required
            onChange={(event) => setTime(event.target.value)}
            aria-label='time-input'
          >
            {availableTimes?.map((timeOption) => (
              <option value={timeOption} key={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor='numberOfDiners'>
          Number of Diners:
          <input
            type='number'
            min={1}
            value={diners}
            onChange={(event) => setDiners(event.target.value)}
            aria-label='diner-input'
          />
        </label>
        <br />
        <label htmlFor='location'>
          Location:
          <div>
            <input
              type='radio'
              required
              id='outdoor'
              name='location'
              value='outdoor'
              checked={location === 'outdoor'}
              onChange={(event) => setLocation(event.target.value)}
              aria-label='outdoor-input'
            />
            <label htmlFor='outdoor' id='label-outdoor'>
              Outdoor
            </label>
            <br />
            <input
              type='radio'
              id='indoor'
              value='indoor'
              name='location'
              checked={location === 'indoor'}
              onChange={(event) => setLocation(event.target.value)}
              aria-label='indoor-input'
            />
            <label htmlFor='indoor' id='label-indoor'>
              Indoor
            </label>
          </div>
        </label>
        <br />
        <label htmlFor='occasion'>
          Occasion:
          <select
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            aria-label='occasion-input'
          >
            {occasions.map((occasionOption) => (
              <option value={occasionOption} key={occasionOption}>
                {occasionOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor='comments'>
          Comments:
          <br />
          <textarea
            value={requests}
            onChange={(event) => setRequests(event.target.value)}
          />
        </label>
        <br />
        <button
          type='submit'
          className='reserve-button'
          disabled={location === ''}
          aria-label='reserve-button'
        >
          Reserve
        </button>
      </form>
    </div>
  )
}
export default BookingForm
