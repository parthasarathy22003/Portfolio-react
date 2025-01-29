// 

import React from "react";
import ProfileImage from "../images/me.jpg"; // Adjust the path based on your folder structure
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import the required icons

const Home = () => {
  return (
    <div>
      {/* Vertical Navigation */}
      <div className="vertical-nav">
        <a href="#home" className="nav-btn" title="Home">🏠</a>
        <a href="#about" className="nav-btn" title="About">👤</a>
        <a href="#skills" className="nav-btn" title="Skills">🛠️</a>
        <a href="#projects" className="nav-btn" title="Projects">💼</a>
        <a href="#contact" className="nav-btn" title="Contact">📧</a>
      </div>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-details">
          <h1 className="title">
            Hi, <br />
            I'm <span>Parthasarathy</span> <br />
            <span>Full Stack Developer</span>
          </h1>
          <a href="#contact" className="hire-me">Hire Me</a>

          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/parthasarathy-t-7a2b02225"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/parthasarathy22003"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/t.parthasarathyst/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Your Name. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #ff7eb3, #65b2ff, #6dff92);
          background-size: 300% 300%;
          animation: gradientBG 8s infinite;
        }

        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .vertical-nav {
          position: fixed;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .nav-btn {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff7eb3, #6dff92);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .nav-btn:hover {
          transform: scale(1.2);
          background: linear-gradient(135deg, #65b2ff, #ff7eb3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        #home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 100px;
          color: white;
        }

        .home-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
        }

        .title span {
          display: inline-block;
          animation: fadeIn 2s ease-in-out infinite alternate;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0.2;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hire-me {
          padding: 10px 20px;
          background: linear-gradient(135deg, #6dff92, #ff7eb3);
          color: white;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          border-radius: 30px;
          transition: all 0.3s;
        }

        .hire-me:hover {
          background: linear-gradient(135deg, #65b2ff, #6dff92);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        }

        .social-links {
          display: flex;
          gap: 30px;
          margin-top: 20px;
        }

        .social-links a {
          font-size: 2rem;
          color: white;
          text-decoration: none;
          transition: transform 0.3s, color 0.3s;
        }

        .social-links a:hover {
          transform: scale(1.2);
          color: #ff7eb3;
        }

        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 5px solid white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .profile-image:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        /* Footer Styles */
        .footer {
          background-color: #1e293b;
          color: white;
          padding: 20px 0;
          text-align: center;
        }

        .footer p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Home;
