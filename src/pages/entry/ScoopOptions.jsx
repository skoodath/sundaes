import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ScoopOptions = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };
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
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs='6' style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlign: "left" }}>
          <Form.Control
            type='number'
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOptions;
