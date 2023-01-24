import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/ReserveForm.css'

const ReserveForm = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [diners, setDiners] = useState('')
  const [location, setLocation] = useState('')
  const [requests, setRequests] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/confirmation')
  }

  const times = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
  ]

  const occasion = ['None', 'Birthday', 'Engagement', 'Anniversary']
  return (
    <div className='reserve-container'>
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label>
          Date:
          <input
            type='date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <select
            value={time}
            onChange={(event) => setTime(event.target.value)}
          >
            {times.map((timeOption) => (
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
              value='outdoor'
              checked={location === 'outdoor'}
              onChange={(event) => setLocation(event.target.value)}
            />
            Outdoor
            <br />
            <input
              type='radio'
              value='indoor'
              checked={location === 'indoor'}
              onChange={(event) => setLocation(event.target.value)}
            />
            Indoor
          </div>
        </label>
        <br />
        <label>
          Occasion:
          <select
            value={occasion}
            onChange={(event) => setTime(event.target.value)}
          >
            {occasion.map((occasionOption) => (
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
export default ReserveForm
