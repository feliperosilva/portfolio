import React from 'react'
import styles from "../../styles/Projects.module.css"
import project1 from "../../assets/img1.jpg"
import project2 from "../../assets/img2.jpg"
import project3 from "../../assets/img3.jpg"
import { useTranslation } from "react-i18next"

const Projects = () => {
  const {t} = useTranslation();
  const ProjectData = [
    {
      name: "MindScope",
      description: t('proj_descript.1.description'),
      image: project1,
    },
    {
      name: "QuickCart",
      description: t('proj_descript.2.description'),
      image: project2,
    },
    {
      name: "EduWave",
      description: t('proj_descript.3.description'),
      image: project3,
    }
  ]

  const ProjectCard = ({name, description, image, isEven}) => {
    return (
      <div className={`${styles.proj_card} ${isEven ? styles.even : styles.odd}`}>
        <div className={styles.proj_text}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.image}>
          <img className={styles.proj_img} src={image} alt={name} />
        </div>
      </div>
    )
  }

  return (
    <section id="projects">
      <div className={styles.title}>
        <h1>{t('projects')}</h1>
      </div>
      <div className={styles.projects}>
        {ProjectData.map((project, index) => (
          <ProjectCard 
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            isEven={index % 2 === 0}
          />
        ))} 
      </div>
           
    </section>
  )
}

export default Projects
