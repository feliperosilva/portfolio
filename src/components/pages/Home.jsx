import { useNavigate } from 'react-router-dom';
import styles from "../../styles/Home.module.css"
import photo from "../../assets/foto-felipe.png"


const Home = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div>
      <section id='home' className={styles.home}>
        <div className={styles.headline}>
          <h2 className={styles.entry_line}>From Pianist to Web Developer</h2>
          <h1 className={styles.title}>&lt; Hi, I am Felipe Silva /&gt;</h1>
          <p className={styles.description}>Blending creativity and technology to build engaging digital experiences</p>
        </div>
        <div className={styles.head_photo}>
          <img src={photo} alt="Felipe photo" />
        </div>
        
      </section>

      <section id='about' className={`${styles.about} ${darkMode ? styles.dark : ''}`}>
        <h1 className={styles.big_title}>About</h1>
        <button onClick={() => navigate("/about")} className={`${styles.page_button} ${darkMode ? styles.dark : ''}`}>Go to page</button>
      </section>

      <section id='products' className={`${styles.products} ${darkMode ? styles.dark : ''}`}>
        <h1 className={styles.big_title}>Products</h1>
        <button onClick={() => navigate("/products")} className={`${styles.page_button} ${darkMode ? styles.dark : ''}`}>Go to page</button>
      </section>

      <section id='courses' className={`${styles.courses} ${darkMode ? styles.dark : ''}`}>
        <h1 className={styles.big_title}>Courses</h1>
        <button onClick={() => navigate("/courses")} className={`${styles.page_button} ${darkMode ? styles.dark : ''}`}>Go to page</button>
      </section>

      <section id='contact' className={`${styles.contact} ${darkMode ? styles.dark : ''}`}>
        <h1 className={styles.big_title}>Contact</h1>
        <button onClick={() => navigate("/contact")} className={`${styles.page_button} ${darkMode ? styles.dark : ''}`}>Go to page</button>
      </section>
      
    </div>
  )
}

export default Home
