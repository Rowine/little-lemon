import './styles/TestimonialCards.css'

const TestimonialCards = ({ rating, name, review, image }) => {
  return (
    <div className='testimonial-card-container'>
      <div className='rating'>{rating} / 10</div>
      <div className='card-image-name'>
        <img className='card-image' src={image} alt={name} />
        <h2 className='card-name'>{name}</h2>
      </div>
      <p className='card-review'>{review}</p>
    </div>
  )
}
export default TestimonialCards
