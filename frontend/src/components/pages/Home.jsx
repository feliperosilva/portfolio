import styles from "../../styles/Home.module.css"
import photo from "../../assets/foto-felipe.png"
import { useTranslation } from "react-i18next"


const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home_container}>
      <section id='home' className={styles.home}>
        <div className={styles.headline}>
          <h2 className={styles.entry_line}>{t('entry')}</h2>
          <h1 className={styles.title}>&lt; {t('title')} /&gt;</h1>
          <p className={styles.description}>{t('description')}</p>
        </div>
        <div className={styles.head_photo}>
          <img className={styles.photo} src={photo} alt="Felipe photo" />
        </div>
        
      </section>

    </div>
  )
}

export default Home
