import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";
import logo from "../assets/Felipe-designstyle-cartoon-m.png"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/#home">
            <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <ul className={styles.links}>
            <li>
                <Link to="/#about" className={styles.animated_link}>About</Link>
            </li>      
            <li>
                <Link to="/#products" className={styles.animated_link}>Products</Link>
            </li>      
            <li>
                <Link to="/#courses" className={styles.animated_link}>Courses</Link>
            </li>      
            <li>
                <Link to="/#contact" className={styles.animated_link}>Contact</Link>
            </li>      
        </ul>
        <div className={styles.nav_buttons}>
            <button className='cta'>
                Login
            </button>        
            <button className='cta'>
                Sign Up
            </button> 
        </div>
               
    </nav>
    
  )
}

export default Navbar
