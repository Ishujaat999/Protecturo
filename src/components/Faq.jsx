import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import FaqsImg from "../assets/images/png/Faqs-img.png";

function Faq() {
  return (
    <>
      <section className="position-relative mb-5 pb-5" id="Faq">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="6" xxl="6" className="text-center">
              <img
                className="z-index-1 d-none d-md-block d_md_none d_3xxl_none FaqsImg_img d_inline_block 
                w-50"
                src={FaqsImg}
                alt="FaqsImg"
              />
              <img
                className="z-index-1 d_none FaqsImg_img d_3xxl_inline_block"
                src={FaqsImg}
                alt="FaqsImg"
              />
            </Col>
            <Col md="6" xxl="6">
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
