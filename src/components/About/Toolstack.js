import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
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

  // Define tool names
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip style={tooltipStyle}>
                {tool.name}
              </Tooltip>
            }
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
