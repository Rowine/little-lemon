import TestimonialCards from './TestimonialCards'
import './styles/Testimonials.css'

const Testimonials = () => {
  const testimonyData = [
    {
      name: 'Jane Doe',
      rating: 9,
      image: `https://randomuser.me/api/portraits/women/30.jpg`,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error!',
    },
    {
      name: 'John Doe',
      rating: 10,
      image: `https://randomuser.me/api/portraits/men/30.jpg`,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error!',
    },
    {
      name: 'Mary Ann',
      rating: 9,
      image: `https://randomuser.me/api/portraits/women/25.jpg`,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error!',
    },
  ]
  return (
    <div className='testimonial-container'>
      <div className='testimonials-section-container'>
        <div className='testimonials-section-title'>Testimonials</div>
        <div className='testimonial-cards-container'>
          {testimonyData.map((testimony) => (
            <TestimonialCards
              name={testimony.name}
              image={testimony.image}
              review={testimony.review}
              rating={testimony.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Testimonials
