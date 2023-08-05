import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../Home';
import { faGithub, faHouse, faLinkedinIn, faProfile, } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'/>
    </Link>
    <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
           <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
           <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a href='https://www.linkedin.com/in/sakthivel-vadivelu/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a href='https://www.github.com/VSVEL' target='_blank'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>

    </ul>

    </div>)
}

export default Sidebar;