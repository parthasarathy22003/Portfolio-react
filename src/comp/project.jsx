import React from "react";
import todoListImage from "../images/todo.png"; // Assuming you have the image for ToDo List Project
import ECommerceImage from "../images/ecom.jpeg";
import StudentImage from "../images/student.jpg";
import BookImage from "../images/book.webp";

const Project = () => {
  return (
    <section id="projects" className="projectsSection">
      <div className="container">
        <h1 className="section-title">Projects</h1>

        {/* E-commerce Backend Project */}
        <div className="project">
          <div className="project-details">
            <h3>E-commerce Backend Project</h3>
            <p><span>Technologies:</span> Java, Spring Boot, Hibernate, Spring Data JPA, MySQL, REST API</p>
            <p>This project focuses on building a robust backend for an e-commerce platform. It includes functionalities like user authentication, product management, and order handling.</p>
            <p>Tested thoroughly with Postman to ensure API functionality and reliability.</p>
          </div>
          <div className="project-image-container">
            <img src={ECommerceImage} alt="E-commerce Project" className="project-image" />
            <div className="overlay">E-commerce Backend API</div>
          </div>
        </div>

        {/* Student Management System */}
        <div className="project">
          <div className="project-details">
            <h3>Student Management System</h3>
            <p><span>Technologies:</span> HTML, CSS, Java, Spring Boot, Thymeleaf, Hibernate, Data JPA</p>
            <p>A server-side application to manage student data with CRUD operations. It includes features for adding, updating, and searching student records.</p>
            <p>The UI is intuitive and built with Thymeleaf templates for a seamless experience.</p>
          </div>
          <div className="project-image-container">
            <img src={StudentImage} alt="Student Management System" className="project-image" />
            <div className="overlay">Student Management System</div>
          </div>
        </div>

        {/* Bookstore Management Backend API */}
        <div className="project">
          <div className="project-details">
            <h3>Bookstore Management Backend API</h3>
            <p><span>Technologies:</span> Java, Spring Boot, Hibernate, Spring Data JPA, MySQL, REST API</p>
            <p>Designed for managing bookstore operations, including inventory management, book categorization, and order tracking.</p>
            <p>APIs were built and tested using Postman to ensure reliability and accuracy.</p>
          </div>
          <div className="project-image-container">
            <img src={BookImage} alt="Bookstore Management Project" className="project-image" />
            <div className="overlay">Bookstore Management API</div>
          </div>
        </div>

        {/* To-Do List React Project */}
        <div className="project">
          <div className="project-details">
            <h3>To-Do List</h3>
            <p><span>Technologies:</span> React, JavaScript, HTML, CSS</p>
            <p>A simple To-Do List app built using React for managing daily tasks. It allows users to add, delete, and mark tasks as completed.</p>
            <p>The app is fully responsive and easy to use, with task management functionalities available at your fingertips.</p>
          </div>
          <div className="project-image-container">
            <a href="https://todolist-react-ruddy-five.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={todoListImage} alt="To-Do List Project" className="project-image" />
              <div className="overlay">To-Do List Project</div>
            </a>
          </div>
        </div>

      </div>

      {/* Style block */}
      <style jsx>{`
        .projectsSection {
          min-height: 100vh;
          padding: 50px 20px;
          background: linear-gradient(to bottom, #9dbde7, #738cd5);
          background-size: 300% 300%;
          animation: gradientBG 8s infinite;
          color: #1e293b;
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

        .project {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 40px;
          background-color: #e0f2fe;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-in-out;
        }

        .project:nth-child(even) {
          flex-direction: row-reverse;
        }

        .project-details {
          flex: 1;
          padding: 20px;
        }

        .project-details h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .project-details p {
          margin: 5px 0;
          line-height: 1.6;
        }

        .project-details span {
          font-weight: bold;
          color: #0c4a6e;
        }

        .project-image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .project-image {
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
          margin: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border-radius: 10px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .project-image-container:hover .overlay {
          opacity: 1;
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media screen and (max-width: 768px) {
          .project {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;
