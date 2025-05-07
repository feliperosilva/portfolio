import React from 'react'
import styles from "../../styles/Technologies.module.css"
import python from "../../assets/Python.png"
import js from "../../assets/JavaScript.png"
import react from "../../assets/React.png"
import html from "../../assets/HTML5.png"
import css from "../../assets/CSS3.png"
import django from "../../assets/Django.png"
import flask from "../../assets/Flask.png"
import sqlite from "../../assets/SQLite.png"
import { useTranslation } from 'react-i18next'

const Technologies = () => {
  const {t} = useTranslation();
  const techData = [
    {
      name: "Python",
      icon: python,
      description: t('python'),
    },
    {
      name: "JavaScript",
      icon: js,
      description: t('js'),
    },
    {
      name: "React",
      icon: react,
      description: t('react'),
    },
    {
      name: "HTML5",
      icon: html,
      description: t('html'),
    },
    {
      name: "CSS3",
      icon: css,
      description: t('css'),
    },
    {
      name: "Django",
      icon: django,
      description: t('django'),
    },
    {
      name: "Flask",
      icon: flask,
      description: t('flask'),
    },
    {
      name: "SQLite",
      icon: sqlite,
      description: t('sqlite'),
    },
  ]

  const TechCard = ({icon, name, description}) => {
    return (
      <div className={styles.tech_card}>
        <div className={styles.icon}><img src={icon} alt={name} /></div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }

  return (
    <section id="technologies">
      <div className={styles.title}>
        <h1>{t('technologies')}</h1>
        <h4>{t('tech_h4')}</h4>
      </div>
      <div className={styles.cards}>
        {techData.map((tech, index) => {
          return (
            <TechCard 
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Technologies
