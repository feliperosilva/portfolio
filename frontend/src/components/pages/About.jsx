import React from 'react'
import styles from "../../styles/About.module.css"
import pic from "../../assets/felipe-pic.jpeg"
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation();

  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.about}>
        <div className={styles.picture}>
          <img src={pic} alt="Felipe" />
        </div>
        <div className={styles.about_description}>
          <h1>{t('about.description.h1')}</h1>
          <p>{t('about.description.p1')}</p>
          <p>{t('about.description.p2')}</p>
        </div>
      </div>
    </section>    
  )
}

export default About
