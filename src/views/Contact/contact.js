import React from "react";
import { Col, Row, Container } from "reactstrap";

const Contact = () => {
  return (
    <Container id="contact">
      <h2>Contact Us</h2>
      <div className="m-5">
        <Row className="text-center">
          <Col md={3}>
            <a href="https://www.facebook.com/" target="_blank">
              <i
                className="fa fa-facebook-square fa-4x text-info"
                aria-hidden="true"
              ></i>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://www.instagram.com/" target="_blank">
              <i
                className="fa fa-instagram fa-4x text-info"
                aria-hidden="true"
              ></i>
            </a>
          </Col>
          <Col md={3}>
            <a href="https://twitter.com/?lang=en" target="_blank">
              <i
                className="fa fa-twitter fa-4x text-info"
                aria-hidden="true"
              ></i>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
