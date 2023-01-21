import Logo from '../assets/Logo.svg'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as Exit } from '../assets/x-symbol.svg'

const Nav = () => {
  const handleHamburger = () => {
    const nav = document.getElementById('nav-list')
    nav.style.left = '0'
  }

  const handleExit = () => {
    const nav = document.getElementById('nav-list')
    nav.style.left = '-500px'
  }

  return (
    <nav>
      <img src={Logo} alt='logo'></img>
      <ul id='nav-list'>
        <Exit onClick={handleExit} />
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
      <Hamburger onClick={handleHamburger} />
    </nav>
  )
}
export default Nav
