import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle"; // Importing the Particle component to add the background effect

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Beans.ai",
      date: "May 2024 - Aug 2024",
      location: "Bathinda, Punjab, India",
      description: [
        "Developed optimized ReactJS components to improve loading speeds and user satisfaction while mastering Git for efficient version control and project management.",
        "Executed thorough software testing on both web and app consoles, integrating manual methods to improve user experience, achieving over a 95% bug detection rate before production deployment.",
        "Identified and resolved key error handling issues, collaborating with senior team members to eliminate three causes of crashes in deployed applications."
      ].join(" ")
    },
    {
      title: "Campus Ambassador Intern",
      company: "Shiksha.com",
      date: "Feb 2024 - Present",
      location: "Remote",
      description: [
        "Enhanced community engagement by collaborating with a dedicated team to develop three new initiatives for collecting genuine user data from students, increasing participant involvement by 40% within six months.",
        "Received mentorship from supervisors, contributing to meaningful projects and acquiring skills for future endeavors."
      ].join(" ")
    },
    {
      title: "Mentor",
      company: "GirlScript Summer of Code",
      date: "Oct 2024 - Nov. 2024",
      location: "Remote",
      description: [
        "Evaluated technical documentation of the ticketing process for over 100 users, identifying key improvements that enhanced query resolution efficiency.",
        "Selected based on contributions to open-source projects and a web development-focused interview."
      ].join(" ")
    },
    {
      title: "Google Developer Expert",
      company: "Google Developer Students Club",
      date: "Sep 2024 - Present",
      location: "Remote",
      description: [
        "Joined the GDSC and GDG Lucknow chapters to collaborate with fellow developers, enhance cloud technology skills, and actively participate in GDG events.",
        "Completing the Google Cloud Arcade Labs will qualify you to receive the standard-level swag."
      ].join(" ")
    },
    {
      title: "Campus Ambassador",
      company: "LetsUpgrade",
      date: "Jun 2024 - Jul 2024",
      location: "Remote",
      description: [
        "As a Student Ambassador, I promoted the platform to increase engagement through social media, word of mouth, and creative strategies.",
        "Participated in exclusive activities for ambassadors, showcasing my skills, collaborating with peers, and contributing to LetsUpgrade’s mission of enhancing education.",
        "The program emphasized professionalism, confidentiality, and leadership."
      ].join(" ")
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle /> {/* Add the Particle component here to apply the background effect */}
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#e3d7ff", marginTop: "50px" }}>
          Experience
        </h2> {/* Add marginTop to give space between header and content */}
        <Row className="justify-content-center">
          {experiences.map((exp, index) => (
            <Col md={10} key={index} className="mb-4">
              <Card style={{ backgroundColor: "#39266a", color: "#f1f1f1", borderColor: "#ab8df7" }}>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <Card.Title style={{ color: "#ffffff" }}>{exp.title}</Card.Title>
                      <Card.Subtitle className="mb-2" style={{ color: "#e3d7ff" }}>{exp.company}</Card.Subtitle>
                    </Col>
                    <Col md={4} className="text-md-end">
                      <Card.Subtitle className="mb-2" style={{ color: "#e3d7ff" }}>{exp.date}</Card.Subtitle>
                      <Card.Text style={{ color: "#e3d7ff" }}>{exp.location}</Card.Text>
                    </Col>
                    <Col md={12}>
                      <Card.Text style={{ color: "#f1f1f1" }}>
                        {exp.description}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
