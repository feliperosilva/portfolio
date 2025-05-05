import React, {useState, usseState} from 'react'
import styles from "../../styles/Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData)
  }

  return (
    <section id='contact' className={styles.contact}>
      <h1>Contact</h1>
      <h4>Send a message if you have questions, feedback or just feeling lonely 😜</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_fields}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_fields}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_fields}>
        <label className={styles.label}>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.form_fields}>
          <label className={styles.label}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.send} onClick={handleSubmit}>Send</button>
      </form>
    </section>
    
  );
}

export default Contact
