import Header from '../components/Header'
import BookingForm from '../components/BookingForm'

const Reservations = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <Header step1 />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  )
}
export default Reservations
