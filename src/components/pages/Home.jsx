import React from 'react';
import styles from "../../styles/Home.module.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <section id='home' className={styles.bg_home}>
        <h1>Homepage</h1>
      </section>

      <section id='about' className={styles.bg_about}>
        <h1>About</h1>
        <button onClick={() => navigate("/about")}>Go to page</button>
      </section>

      <section id='products' className={styles.bg_products}>
        <h1>Products</h1>
        <button onClick={() => navigate("/products")}>Go to page</button>
      </section>

      <section id='courses' className={styles.bg_courses}>
        <h1>Courses</h1>
        <button onClick={() => navigate("/courses")}>Go to page</button>
      </section>

      <section id='contact' className={styles.bg_contact}>
        <h1>Contact</h1>
        <button onClick={() => navigate("/contact")}>Go to page</button>
      </section>
      
    </div>
  )
}

export default Home
