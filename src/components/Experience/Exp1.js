import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Beans.ai",
      date: "May 2024 - Aug 2024",
      location: "Bhatinda, Punjab, India",
      description:
        "I focused on optimizing the user experience by improving code efficiency in ReactJS and JavaScript. My responsibilities included software testing, reducing code redundancy, and debugging issues to enhance app stability. I also collaborated using Git for version control and streamlined processes, improving code maintainability. This internship helped me strengthen my web development skills and adapt to a corporate environment, laying a solid foundation for future growth.",
    },
    {
        title: "Campus Ambassador Intern",
        company: "Shiksha.com",
        date: "Feb 2024 - Present",
        location: "Remote",
        description:
          "As a Campus Ambassador with Shiksha.com, I collaborated with a talented team to enhance community engagement and counseling initiatives. This role has provided me with valuable insights into operational management and community-building strategies. I am grateful for the support and mentorship from my supervisors, which has greatly enriched my experience. I am proud to have contributed to meaningful projects and look forward to leveraging the skills I've acquired in my future endeavors.",
      },
    {
      title: "Mentor",
      company: "GirlScript Summer of Code",
      date: "Sep 2024 - Present",
      location: "Remote",
      description:
        "I am honored to serve as a mentor for the GirlScript Summer of Code 2024 - Extended Edition, an open-source program by the GirlScript Foundation. My responsibilities include reviewing projects and guiding participants in a collaborative environment. I was selected based on my contributions to open-source projects and an interview focused on web development.",
    },
    {
        title: "Google Developer Expert",
        company: "Google Developer Students Club",
        date: "Sep 2024 - Present",
        location: "Remote",
        description:
          "I am thrilled to join the Google Developer Student Club and Google Developer Group in the Lucknow chapter! This experience will allow me to connect with fellow developers and enhance my skills in cloud technologies and the Google Cloud Platform (GCP). I look forward to learning, collaborating, and innovating together!",
      },
    {
      title: "Campus Ambassador",
      company: "LetsUpgrade",
      date: "Jun 2024 - Jul 2024",
      location: "Remote",
      description:
        "As a Student Ambassador, I promoted the platform to increase engagement through social media, word of mouth, and creative strategies. I participated in exclusive activities for ambassadors, showcasing my skills, collaborating with peers, and contributing to LetsUpgrade’s mission of enhancing education. The program emphasized professionalism, confidentiality, and leadership.",
    },
  ];

  return (
    <Container
      fluid
      className="experience-section"
      style={{
        backgroundColor: "#2d1950", 
        color: "#f1f1f1", 
        padding: "100px 20px" // Adding gap: 60px padding on top and bottom, 20px on left and right
      }}
    >
      <h2 className="text-center mb-4" style={{ color: "#e3d7ff" }}>
        Experience
      </h2>
      <Row className="justify-content-center">
        {experiences.map((exp, index) => (
          <Col md={10} key={index} className="mb-4">
            <Row
              className="experience-card border-bottom pb-3"
              style={{ borderColor: "#ab8df7" }}
            >
              <Col md={8}>
                <h5 style={{ color: "#ffffff" }}>{exp.title}</h5>
                <p className="mb-1" style={{ color: "#e3d7ff" }}>{exp.company}</p>
              </Col>
              <Col md={4} className="text-md-end">
                <p className="mb-1" style={{ color: "#e3d7ff" }}>{exp.date}</p>
                <p style={{ color: "#e3d7ff" }}>{exp.location}</p>
              </Col>
              <Col md={12}>
                <p style={{ color: "#f1f1f1" }}>{exp.description}</p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
