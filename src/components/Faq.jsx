import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import FaqsImg from "../assets/images/png/Faqs-img.png";

function Faq() {
  return (
    <>
      <section className="position-relative" id="Faq">
        <img className="w-75 d-block d-xl-none" src={FaqsImg} alt="FaqsImg" />
        <Container>
          <Row className=" align-items-center flex-lg-row justify-content-between">
            <Col xl="5" xxl="5">
              <div className="w-50">
                <img
                  className="z-index-1 d-none d-xl-block position-absolute start-0 top-0"
                  src={FaqsImg}
                  alt="FaqsImg"
                />
              </div>
            </Col>
            <Col xl="6" xxl="7">
              <p className=" ff_gilroy_bold fw-bold fs_xxl faq_gradient p-0 m-0 text-center text-xl-start">
                FAQs
              </p>
              <h2
                className=" ff_gilroy_bold tc_secondary fw-bold fs_4xl text_white_2 pt-1 text-center
               text-xl-start pb-3"
              >
                Some useful answers
              </h2>
              <Accordion
                className=" d-flex flex-column gap-4 mt-4"
                defaultActiveKey="0"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the three types of cyber threats?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can you protect yourself from cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What would happen without cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is cyber security a social or governance issue?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
