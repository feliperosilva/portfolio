import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";
import logo from "../assets/Felipe-designstyle-cartoon-m.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false) 

    return (
        <nav className={styles.navbar}>

            <Link to="/#home">
                <img src={logo} alt="logo" className={styles.logo}/>
            </Link>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.links} ${isOpen ? styles.menu_open : ''}`}>
                <li>
                    <Link to="/#about" className={styles.animated_link} onClick={closeMenu}>About</Link>
                </li>      
                <li>
                    <Link to="/#products" className={styles.animated_link} onClick={closeMenu}>Products</Link>
                </li>      
                <li>
                    <Link to="/#courses" className={styles.animated_link} onClick={closeMenu}>Courses</Link>
                </li>      
                <li>
                    <Link to="/#contact" className={styles.animated_link} onClick={closeMenu}>Contact</Link>
                </li>      
                <li>
                    <button className={styles.button_mobile} onClick={() => alert('You clicked the mobile Login button!')}>
                        Login
                    </button>
                </li>      
                <li>
                    <button className={styles.button_mobile} onClick={() => alert('You clicked the mobile Sign Up button!')}>
                        Sign Up
                    </button>
                </li>      
            </ul>
            <div className={styles.nav_buttons}>
                <button onClick={() => alert('You clicked the Login button!')}>
                    Login
                </button>        
                <button onClick={() => alert('You clicked the Sign Up button!')}>
                    Sign Up
                </button> 
            </div>           
        
                 
        </nav>    
  )
}

export default Navbar
