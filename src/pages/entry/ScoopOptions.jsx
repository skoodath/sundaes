import React from "react";
import Col from "react-bootstrap/Col";

const ScoopOptions = ({ name, imagePath }) => {
  const myStyle = {
    columnStyle: {
      textAlign: "center",
    },
    imgStyle: {
      width: "75%",
    },
  };

  const { columnStyle, imgStyle } = myStyle;

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={columnStyle}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={imgStyle}
      />
    </Col>
  );
};

export default ScoopOptions;
