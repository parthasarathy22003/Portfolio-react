import React from "react";
import { FaJava, FaLeaf, FaDatabase, FaHtml5, FaJs, FaReact, FaCss3, FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" style={styles.skillsSection}>
      <div style={styles.skillsContent}>
        <h1 style={styles.skillsTitle}>My Skills</h1>
        <ul style={styles.skillsList}>
          <li style={styles.skillItem}><FaJava style={styles.icon} /> Java</li>
          <li style={styles.skillItem}><FaLeaf style={styles.icon} /> Spring Boot</li>
          <li style={styles.skillItem}><FaDatabase style={styles.icon} /> MySQL</li>
          <li style={styles.skillItem}><FaHtml5 style={styles.icon} /> HTML </li>
          <li style={styles.skillItem}><FaCss3 style={styles.icon} /> CSS</li>
          <li style={styles.skillItem}><FaBootstrap style={styles.icon} />BootStrap</li>
          <li style={styles.skillItem}><FaJs style={styles.icon} /> JavaScript</li>
          <li style={styles.skillItem}><FaReact style={styles.icon} /> React</li>
        </ul>
      </div>
    </section>
  );
};

// ✅ CSS Styles as a JavaScript object
const styles = {
  skillsSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  // Center the content horizontally and vertically
    padding: "0 20px",
    color: "white",
    
  },
  skillsContent: {
    maxWidth: "80%",  // Adjusted to have more width for the row layout
    display: "flex",
    flexDirection: "column",
    alignItems: "center",  // Center align the content
    gap: "20px",
  },
  skillsTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "black",  // Set title color to black
  },
  skillsList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.2rem",
    display: "flex",  // Display skills in a row
    flexDirection: "row",  // Align items in a row
    justifyContent: "center",  // Center the items in the row
    gap: "30px",  // Added space between items
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",  // Stack the icon and text vertically
    alignItems: "center",  // Center the icon and text together
    gap: "10px",  // Space between the icon and the text
  },
  icon: {
    fontSize: "3rem",  // Increased icon size
  },
};

export default Skills;
