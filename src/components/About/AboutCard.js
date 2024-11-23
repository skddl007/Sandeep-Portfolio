import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandeep Kumar </span>
            from <span className="purple"> Lucknow, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing B. Tech. in Computer Science at Sitare University.
            I have experience in software development and testing, particularly with React JS and automation tools.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Intenet Explorer
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Punjabi Songs
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
