import React from 'react';
import styles from "../../styles/Home.module.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <section id='home' className={styles.home}>
        <h1 className={styles.big_title}>Homepage</h1>
      </section>

      <section id='about' className={styles.about}>
        <h1 className={styles.big_title}>About</h1>
        <button onClick={() => navigate("/about")} className={styles.page_button}>Go to page</button>
      </section>

      <section id='products' className={styles.products}>
        <h1 className={styles.big_title}>Products</h1>
        <button onClick={() => navigate("/products")} className={styles.page_button}>Go to page</button>
      </section>

      <section id='courses' className={styles.courses}>
        <h1 className={styles.big_title}>Courses</h1>
        <button onClick={() => navigate("/courses")} className={styles.page_button}>Go to page</button>
      </section>

      <section id='contact' className={styles.contact}>
        <h1 className={styles.big_title}>Contact</h1>
        <button onClick={() => navigate("/contact")} className={styles.page_button}>Go to page</button>
      </section>
      
    </div>
  )
}

export default Home
