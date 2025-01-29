import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social icons

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <h1 className="section-title">Contact</h1>
        
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" required></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Your Name. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/parthasarathy-t-7a2b02225" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/parthasarathy22003" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/t.parthasarathyst/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </footer>

      {/* CSS styles */}
      <style jsx>{`
        .contactSection {
          min-height: 100vh;
          padding: 50px 20px;
          background: linear-gradient(to bottom, #9dbde7, #738cd5);
          color: #1e293b;
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background-color: #e0f2fe;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .contact-form label {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .contact-form textarea {
          height: 150px;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #0c4a6e;
          color: white;
          font-size: 1.2rem;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }

        .hire-me {
          text-align: center;
          margin-top: 20px;
        }

        .hire-button {
          padding: 15px 25px;
          background-color: #0c4a6e;
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          border-radius: 10px;
        }

        .hire-button:hover {
          background-color: #738cd5;
        }

        .footer {
    background-color: #333;
    color: white;
    padding: 30px;
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .social-links a {
    color: white;
    margin: 0 15px;
    font-size: 2rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  .social-links a:hover {
    transform: scale(1.3);
    color: #00acee; /* Brighter color on hover */
  }
           }
      `}</style>
    </section>
  );
};

export default Contact;