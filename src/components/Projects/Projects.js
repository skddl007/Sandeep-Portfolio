import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dubbing from "../../Assets/Projects/dubbing.png";
import ImEditor from "../../Assets/Projects/image.png";
import loan from "../../Assets/Projects/loan.png";
import news from "../../Assets/Projects/news.png";
import prepzone from "../../Assets/Projects/PrepZone.png";
import ticket from "../../Assets/Projects/ticket.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Text-Analysis-Report"
              description="Established a web application for writing style analysis, achieving a 24% reduction in analysis time, integrated machine learning algorithms that provided actionable insights, directly impacting content quality improvements."
              ghLink="https://github.com/skddl007/News-Text-Analysis-Report"
              demoLink="https://news-text-analysis-report.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImEditor}
              isBlog={false}
              title="ImageEditor"
              description="A Flask-based web app for uploading and editing images with features like filters, cropping, blur, rotation, face detection, and text extraction. It includes an undo-redo system and allows users to download edited images."
              ghLink="https://github.com/skddl007/ImageEditor"
              demoLink="https://image-editing-a2zj.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loan-Approval-Prediction System"
              description="Developed a Flask application for loan approval prediction, integrating a machine learning model that delivers decisions with 79%,
                            accuracy. The application enhances user expe-
                            rience with seamless authentication and CSV
                            handling"
              ghLink="https://github.com/skddl007/Loan-Approval-Prediction"
              demoLink="https://loan-approval-prediction-ot0w.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prepzone}
              isBlog={false}
              title="PrepZone.ai"
              description="Developed a user authentication and analytics
                            framework for the library, enabling real-time
                            tracking of attendee movements to identify
                            peak usage times."
              ghLink="https://github.com/skddl007/PrepZone.ai"
              demoLink="" // Add the demo link here if available
            />
          </Col>
        </Row>

        {/* Open Source Contributions and Mentorship */}
        <h2 className="project-heading" style={{ paddingTop: "20px" }}>
          GSSOC Contributions & Mentorship
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <h3 className="project-subheading">GSSOC Contributions</h3>
            <ProjectCard
              imgPath={dubbing}
              isBlog={false}
              title="Speech Recognition Model for Indic and Local Languages"
              description="The model is trained on large databases of different languages and dialects of those in different regions of India. The model is trained on a simple CPU, and the computational cost is lowest compared to different SR models across the world."
              ghLink="https://github.com/PlanetRead/PR-Repository"
              demoLink="" // Add the demo link here if available
            />
          </Col>

          <Col md={6} className="project-card">
            <h3 className="project-subheading">Mentorship Projects</h3>
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="Ticket Booking System (Mentor)"
              description="Developed a project to centralize ticket booking for buses, trains, and flights. Evaluated technical documentation for over 100 users, identifying improvements that enhanced query resolution efficiency and streamlined the booking process."
              ghLink="https://github.com/ankit071105/Ticket-Booking"
              demoLink="" // Add the demo link here if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
