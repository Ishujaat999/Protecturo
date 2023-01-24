import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import path_14 from "../assets/images/png/path14.png";
const OurBenefits = () => {
  return (
    <>
      <section className=" bg-black py-5">
        <Container>
          <Row className=" align-items-center justify-content-center justify-content-lg-start">
            <Col md="5" lg="4">
              <img
                className=" w-100 position-relative "
                src={path_14}
                alt="path_14.png"
              />
            </Col>
            <Col lg="7">
              <p className=" fs_xxl  fw-bold tc_danger pt-md-5 pt-lg-0 text-center text-lg-start">
                Our benefits
              </p>
              <h2 className=" fw-bold fs_4xl text-light py-2 text-center text-lg-start">
                Take control of <br></br> your cellular connectivity
              </h2>
              <p className=" fw_medium fs_xl tc_info py-2 text-center text-lg-start">
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
              <div className=" d-sm-flex ">
                <div className=" w-50 ">
                  <h2 className=" fw-semibold text-light fs_xxl">
                    Get started with IoT
                  </h2>
                  <p className=" fw_medium fs_sm tc_info max_width_300">
                    Our experts helps you find the most suitable carrier profile
                    for your deployment.
                  </p>
                </div>
                <div className=" w-50 ">
                  <h2 className=" fw-semibold text-light fs_xxl">
                    Manage connectivity
                  </h2>
                  <p className=" fw_medium fs_sm tc_info max_width_250">
                    Control all of your IoT SIM cards on a single platform.
                  </p>
                </div>
              </div>
              <div className=" d-sm-flex ">
                <div className=" w-50 ">
                  <h2 className=" fw-semibold text-light fs_xxl">
                    One global solution
                  </h2>
                  <p className=" fw_medium fs_sm tc_info max_width_300">
                    You will receive 1 invoice and have a single point of
                    contact for support no matter where the SIMs are deployed.
                  </p>
                </div>
                <div className=" w-50 ">
                  <h2 className=" fw-semibold text-light fs_xxl">
                    Scale infinitely with ease
                  </h2>
                  <p className=" fw_medium fs_sm tc_info max_width_354">
                    Reach all business goals with a single connectivity partner.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurBenefits;
