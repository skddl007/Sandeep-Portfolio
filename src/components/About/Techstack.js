import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiPython, DiReact, DiNodejs, DiJava, DiMysql, DiPostgresql } from "react-icons/di"; // Removed DiJavascript1
import { SiSelenium, SiNumpy, SiPandas, SiFlask, SiPlotly, SiHtml5, SiCss3, SiMongodb } from "react-icons/si";

function Techstack() {
  // Define skill names without JavaScript
  const skills = [
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiPlotly />, name: "Plotly" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  // Styles for the tooltip
  const tooltipStyle = {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "5px",
    padding: "8px",
    fontSize: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s",
  };

  return (
    <div>
      {/* Programming Languages Section */}
      <h3 style={{ textAlign: "center" }}>Programming Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.slice(0, 2).map((skill, index) => ( // Adjusted to display 2 items
          <Col key={index} xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  {skill.name}
                </Tooltip>
              }
            >
              <div>{skill.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      {/* Web Development Section */}
      <h3 style={{ textAlign: "center" }}>Web Development</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.slice(2, 7).map((skill, index) => ( // Adjusted to display 5 items
          <Col key={index} xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  {skill.name}
                </Tooltip>
              }
            >
              <div>{skill.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      {/* Data Science & Testing Tools Section */}
      <h3 style={{ textAlign: "center" }}>Data Science & Testing Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.slice(7, 11).map((skill, index) => ( // Adjusted to display 4 items
          <Col key={index} xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  {skill.name}
                </Tooltip>
              }
            >
              <div>{skill.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>

      {/* Database Section */}
      <h3 style={{ textAlign: "center" }}>Databases</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.slice(11).map((skill, index) => ( // Adjusted to display 3 items
          <Col key={index} xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  {skill.name}
                </Tooltip>
              }
            >
              <div>{skill.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
