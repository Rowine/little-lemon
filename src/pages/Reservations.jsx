import Header from '../components/Header'
import BookingForm from '../components/BookingForm'

const Reservations = ({ values, submitForm }) => {
  return (
    <>
      <Header step1 />
      <BookingForm values={values} submitForm={submitForm} />
    </>
  )
}
export default Reservations
