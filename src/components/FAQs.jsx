import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaqsImg from "../assets/images/png/Faqs-img.png";

const FAQs = ({ faq, index, toggleFAQ }) => {
  return (
    <>
      <section className="position-relative">
        <Container>
          <Row>
            <Col lg="6">
              <img
                className="position-absolute start-0"
                src={FaqsImg}
                alt="FaqsImg"
              />
            </Col>
            <Col lg="6">
              <div
                className={"faq " + (faq.open ? "open" : "")}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQs;
