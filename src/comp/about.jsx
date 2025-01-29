
import React from "react";
import ProfileImage from "../images/me.jpg";

const About = () => {
  return (
    <section id="about" style={styles.aboutSection}>
      <div style={styles.aboutContent}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>
          I’m a passionate Java Full Stack Developer currently in my final year of Electronics and Communication Engineering at Tamilnadu College of Engineering.
          My journey as a developer began in Madurai, my native place, where I honed my problem-solving skills and love for technology.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔️ Final Year Student - ECE Department</li>
          <li style={styles.listItem}>✔️ Scored 62.58% in TCS NQT Cognitive Exam.</li>
          <li style={styles.listItem}>✔️ Completed Java Full-stack Development Course at Livewire (Aug 2024 - Feb 2025).</li>
          <li style={styles.listItem}>✔️ Earned a Silver Level Badge (4 stars) for Java on HackerRank.</li>
          <li style={styles.listItem}>✔️ Strong interest in building scalable web applications</li>
          <li style={styles.listItem}>✔️ Proficient in front-end and back-end development</li>
        </ul>
      </div>
      <img src={ProfileImage} alt="Profile" className="profile-image"  style={styles.aboutImage} />
    </section>
  );
};

const styles = {
  aboutSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 100px",
    color: "white",
  },
  aboutContent: {
    maxWidth: "50%",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: "1.1rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  aboutImage: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    border: "5px solid white",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    animation: "bounce 3s infinite",
  },
};

export default About;
