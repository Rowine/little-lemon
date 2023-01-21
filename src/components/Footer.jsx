import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='logo'></img>
      <ul>
        <li>Navigation</li>
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
        <li>Contact</li>
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
        <li>Social Media Links</li>
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
