import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GlobalImg from "../assets/images/png/Global.png";
const Global = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <h2 className="fw-bold fs_4xl tc_secondary">
                Global IoT connectivity to deploy and scale your solutions
              </h2>
              <p className="fw_medium fs_xl tc_info">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
            </Col>
            <Col lg="5">
              <img className="w-100" src={GlobalImg} alt="GlobalImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Global;
