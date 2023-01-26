import { Link } from 'react-router-dom'
import './styles/SuccessModal.css'

const SuccessModal = () => {
  return (
    <div className='reserve-container'>
      <h1>Reservation Successful!</h1>
      <div className='modal-container'>
        <p>
          Please wait for the email confirmation that we have sent to you. Thank
          you for choosing Little Lemon!{' '}
        </p>
        <button>
          <Link to={'/'}>Go back shopping</Link>
        </button>
      </div>
    </div>
  )
}
export default SuccessModal
