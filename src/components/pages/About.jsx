import React from 'react'
import styles from "../../styles/About.module.css"
import pic from "../../assets/felipe-pic.jpeg"

const About = () => {
  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.about}>
        <div className={styles.picture}>
          <img src={pic} alt="Felipe" />
        </div>
        <div className={styles.about_description}>
          <h1>From Piano Keys to Keyboard Shortcuts</h1>
          <p>After over 15 years of performing, teaching, and chasing perfection across 88 keys, I decided it was time for a different kind of code. Armed with two master’s degrees in classical music and a well-worn metronome, I traded Chopin for Python and stepped into the world of web development — where debugging is the new sight-reading.</p>
          <p>These days, instead of recitals and rehearsals, you'll find me building websites, writing clean code, and learning new technologies with the same discipline I once applied to Bach. While the concert halls have changed, the passion for creativity and problem-solving remains the same — just in a slightly more caffeinated setting.</p>
        </div>
      </div>
    </section>    
  )
}

export default About
