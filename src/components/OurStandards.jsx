import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Our_Standards from "../assets/images/png/OurStandards.png";
const OurStandards = () => {
  return (
    <>
      <section className=" bg-black mt_m_1 py-5">
        <Container>
          <p className=" fs_xxl  fw-bold tc_danger">Our standards</p>
          <h2 className=" fw-bold text-light fs_4xl">
            Privacy standards <br /> not seen before in telecom
          </h2>
          <Row className=" align-items-center">
            <Col lg="7">
              <img className=" w-100" src={Our_Standards} alt="Our_Standards" />
            </Col>
            <Col lg="5" className="mL_m mt-5 pt-5">
              <h2 className=" fs_3xl fw-bold text-light pt-5">
                Get started <br /> with Protecturo
              </h2>
              <p className=" fw_medium tc_info fs_md ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p className=" fw_medium tc_info fs_md ">
                Your personal information is 100% safe with us, because we do
                not require any personal information besides email. Of course no
                contracts, no credit checks and no fine prints. To protect your
                privacy online, our data plans come with a Privacy IP address.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurStandards;
