import Image from '../assets/restauranfood.jpg'

const Footer = () => {
  return (
    <footer>
      <img src={Image} alt='logo'></img>
      <ul>
        <h2>Navigation</h2>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Menu</a>
        </li>
        <li>
          <a href='/'>Reservations</a>
        </li>
        <li>
          <a href='/'>Order Online</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>

      <ul>
        <h2>Contact</h2>
        <li>
          <a href='/'>Address</a>
        </li>
        <li>
          <a href='/'>Phone Number</a>
        </li>
        <li>
          <a href='/'>Email</a>
        </li>
      </ul>

      <ul>
        <h2>Social Media Links</h2>
        <li>
          <a href='/'>Address</a>
        </li>
        <li>
          <a href='/'>Phone Number</a>
        </li>
        <li>
          <a href='/'>Email</a>
        </li>
      </ul>
    </footer>
  )
}
export default Footer
