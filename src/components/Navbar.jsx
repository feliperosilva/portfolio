import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";
import ptFlag from "../assets/flag-pt.png"
import gbFlag from "../assets/flag-gb.png"

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>

            <Link onClick={() => scrollToSection ('home')} className={styles.logo}>
                <span>
                    &lt;/&gt; Felipe Silva
                </span>
            </Link>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.links} ${isOpen ? styles.menu_open : ''}`}>
                <li>
                    <Link className={styles.page_link} 
                        onClick={() => {
                        closeMenu();
                        scrollToSection ('home');
                        }}>
                            Home
                    </Link>
                </li>      
                <li>
                    <Link className={styles.page_link} onClick={() => {
                        closeMenu();
                        scrollToSection ('about');
                        }}>
                            About me
                    </Link>
                </li>      
                <li>
                    <Link className={styles.page_link} onClick={() => {
                        closeMenu();
                        scrollToSection ('projects');
                        }}>
                            Projects
                    </Link>
                </li>      
                <li>
                    <Link className={styles.page_link} onClick={() => {
                        closeMenu();
                        scrollToSection ('technologies');
                        }}>
                            Technologies
                    </Link>
                </li>      
                <li>
                    <Link className={styles.page_link} onClick={() => {
                        closeMenu();
                        scrollToSection ('contact');
                        }}>
                            Contact me
                    </Link>
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
