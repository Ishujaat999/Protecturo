import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaqsImg from "../assets/images/png/Faqs-img.png";

const FAQs = () => {
  return (
    <>
      <section className="position-relative">
        <Container>
          <Row>
            <Col lg="6">
              <img className="position-absolute start-0" src={FaqsImg} alt="FaqsImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQs;
