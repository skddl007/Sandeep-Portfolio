import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ticket from "../../Assets/Projects/ticket.png";
import editor from "../../Assets/Projects/loan.png";
import chatify from "../../Assets/Projects/news.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/image.png";
import dubbing from "../../Assets/Projects/dubbing.png";

import Optical from "../../Assets/Projects/optical.png";
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
              imgPath={chatify}
              isBlog={false}
              title="News-Text-Analysis-Report"
              description="Text scrapping from newspapers and analysis of writing styles based on ML fiction or non-fiction concept. Visualized graphs; admin access via Google, GitHub, and email OTP verification."
              ghLink="https://github.com/your-repo-link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ImageEditor"
              description="A Flask-based web app for uploading and editing images with features like filters, cropping, blur, rotation, face detection, and text extraction. It includes an undo-redo system and allows users to download edited images."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Loan-Approval-Prediction System"
              description="A Flask-based app that predicts loan approval using an ML model. It features user authentication, CSV handling, text-to-speech, and a chatbot leveraging Google's AI."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Compti-lib"
              description="A MERN stack project focused on creating private workspaces across India, serving as a space for work rather than just books."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>

          {/* Open Source Contributions */}
          <h2 className="project-heading" style={{ paddingTop: "20px" }}>
            Open Source Contributions
          </h2>

          <p style={{ color: "white", paddingBottom: "10px" }}>
            In GSSOC, I contributed to the following projects:
          </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dubbing}
              isBlog={false}
              title="Auto Dubbing System"
              description="Contributed to a system that automatically dubs videos in multiple languages using speech-to-text and text-to-speech technologies."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Optical}
              isBlog={false}
              title="OCR (Optical Character Recognition)"
              description="Contributed to an OCR project that extracts text from images with high accuracy and supports multiple languages."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>

          {/* Mentorship */}
          <h2 className="project-heading" style={{ paddingTop: "20px" }}>
            Mentorship in GSSOC
          </h2>

          <p style={{ color: "white", paddingBottom: "10px" }}>
            I mentored the following project:
          </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="Ticket Booking System (Mentor)"
              description="Mentored a project to develop a system for bus and train ticket booking at a single platform, and reviewed pull requests."
              ghLink="https://github.com/your-repo-link"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
