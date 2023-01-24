import Logo from '../assets/Logo.svg'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as Exit } from '../assets/x-symbol.svg'
import { Link } from 'react-router-dom'

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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/reservations'>Reservations</Link>
        </li>
        <li>
          <Link to='/order'>Order Online</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Hamburger onClick={handleHamburger} />
    </nav>
  )
}
export default Nav
