import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail, // Updated to use the email icon
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming and have continuously honed my skills through diverse projects and challenges.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Flask, and React JS.{" "}
                </b>
              </i>
              <br />
              <br />
              My areas of interest include{" "}
              <i>
                <b className="purple">
                  Web Technologies, Machine Learning, and Competitive Programming.
                </b>
              </i>
              <br />
              <br />
              I have experience in building web applications, particularly using
              <b className="purple"> Flask, React.js, Express.js</b> and
              <i>
                <b className="purple"> MongoDB. </b>
              </i>
              <br />
              Currently, I am working on my PrepZone.ai project based on the idea of enhancing library and work-spaces management systems.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/skddl007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandeep-kumar-ddl/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:saneeipk@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail /> {/* Updated to use the email icon */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
