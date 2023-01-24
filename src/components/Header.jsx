import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faArrowRight,
  faMagnifyingGlass,
  faCreditCard,
  faBellConcierge,
} from '@fortawesome/free-solid-svg-icons'
import './styles/Header.css'

const Header = ({ step1, step2, step3, step4 }) => {
  return (
    <header>
      <FontAwesomeIcon
        icon={faCalendar}
        size={'2x'}
        color={step1 ? '#F4CE14' : '#EDEFEE'}
      />
      <FontAwesomeIcon icon={faArrowRight} size={'2x'} color='#EDEFEE' />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size={'2x'}
        color={step1 && step2 ? '#F4CE14' : '#EDEFEE'}
      />
      <FontAwesomeIcon icon={faArrowRight} size={'2x'} color='#EDEFEE' />
      <FontAwesomeIcon
        icon={faCreditCard}
        size={'2x'}
        color={step1 && step2 && step3 ? '#F4CE14' : '#EDEFEE'}
      />
      <FontAwesomeIcon icon={faArrowRight} size={'2x'} color='#EDEFEE' />
      <FontAwesomeIcon
        icon={faBellConcierge}
        size={'2x'}
        color={step1 && step2 && step3 && step4 ? '#F4CE14' : '#EDEFEE'}
      />
    </header>
  )
}
export default Header
