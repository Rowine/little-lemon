import Pic1 from '../assets/picture-1.png'
import Pic2 from '../assets/picture-2.png'
import './styles/About.css'

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-text'>
        <div className='about-heading'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{' '}
        </p>
      </div>
      <div className='about-image-container'>
        <img className='picture-1' src={Pic1} alt='mario and adrian' />
        <img className='picture-2' src={Pic2} alt='mario and adrian' />
      </div>
    </div>
  )
}
export default About
