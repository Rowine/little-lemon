import { useState, useEffect } from 'react'
import './styles/BookingForm.css'

const occasions = ['None', 'Birthday', 'Engagement', 'Anniversary']

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
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

  useEffect(() => {
    dispatch({ payload: date })
  }, [date, dispatch])

  return (
    <div className='reserve-container'>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label>
          Date:
          <input
            type='date'
            value={date.toISOString().substring(0, 10)}
            required
            onChange={(event) => setDate(new Date(event.target.value))}
          />
        </label>
        <br />
        <label>
          Time:
          <select
            value={time}
            onChange={(event) => setTime(event.target.value)}
          >
            {availableTimes.map((timeOption) => (
              <option value={timeOption} key={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Number of Diners:
          <input
            type='number'
            min={0}
            value={diners}
            onChange={(event) => setDiners(event.target.value)}
          />
        </label>
        <br />
        <label>
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
            />
            <label htmlFor='indoor' id='label-indoor'>
              Indoor
            </label>
          </div>
        </label>
        <br />
        <label>
          Occasion:
          <select
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
          >
            {occasions.map((occasionOption) => (
              <option value={occasionOption} key={occasionOption}>
                {occasionOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Comments:
          <br />
          <textarea
            value={requests}
            onChange={(event) => setRequests(event.target.value)}
          />
        </label>
        <br />
        <button type='submit' className='reserve-button'>
          Reserve
        </button>
      </form>
    </div>
  )
}
export default BookingForm
