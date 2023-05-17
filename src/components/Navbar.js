//css
import styles from './Navbar.module.css';

//image
import logo from '../logo.svg';

//icons
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/">Pokédex</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
        <div>
          <ul className={styles.social}>
            <li>
              <NavLink to="https://facebook.com.br">
                <BsFacebook />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://instagram.com.br">
                <AiOutlineInstagram />
              </NavLink>
            </li>
          </ul>
          <button>
            <NavLink to="">Contato</NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
