import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";
import ptFlag from "../assets/flag-pt.png"
import gbFlag from "../assets/flag-gb.png"

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.navbar} ${darkMode ? styles.dark : ''}`}>

            <Link to="/#home" className={styles.logo}>
                <span>
                    &lt;/&gt; Felipe Silva
                </span>
            </Link>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.links} ${isOpen ? styles.menu_open : ''} ${darkMode ? styles.dark : ''}`}>
                <li>
                    <Link to="/#about" className={`${styles.page_link} ${darkMode ? styles.dark : ''}`} onClick={closeMenu}>Home</Link>
                </li>      
                <li>
                    <Link to="/#about" className={`${styles.page_link} ${darkMode ? styles.dark : ''}`} onClick={closeMenu}>About</Link>
                </li>      
                <li>
                    <Link to="/#products" className={`${styles.page_link} ${darkMode ? styles.dark : ''}`} onClick={closeMenu}>Products</Link>
                </li>      
                <li>
                    <Link to="/#courses" className={`${styles.page_link} ${darkMode ? styles.dark : ''}`} onClick={closeMenu}>Courses</Link>
                </li>      
                <li>
                    <Link to="/#contact" className={`${styles.page_link} ${darkMode ? styles.dark : ''}`} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
            <div className={styles.buttons_lang}>
                <button className={styles.button_pt}>
                    PT <img src={ptFlag} alt="Portuguese flag" style={{ width: '24px', height: '24px', marginLeft: '5px' }} /> 
                </button>
                <button className={styles.button_en}>
                    EN <img src={gbFlag} alt="English flag" style={{ width: '24px', height: '24', marginLeft: '5px' }} />
                </button>
            </div>
        </nav>    
  )
}

export default Navbar
