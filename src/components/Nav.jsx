import Logo from '../assets/Logo.svg'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as Exit } from '../assets/x-symbol.svg'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation()

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
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/menu'
            className={location.pathname === '/menu' ? 'active' : ''}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to='/reservations'
            className={location.pathname === '/reservations' ? 'active' : ''}
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to='/order'
            className={location.pathname === '/order' ? 'active' : ''}
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            className={location.pathname === '/login' ? 'active' : ''}
          >
            Login
          </Link>
        </li>
      </ul>
      <Hamburger onClick={handleHamburger} />
    </nav>
  )
}
export default Nav
