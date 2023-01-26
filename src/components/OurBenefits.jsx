import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import path_14 from "../assets/images/png/path14.png";
import SliderDummy from "./SliderDummy";
const OurBenefits = () => {
  return (
    <>
      <section className=" bg-black py-5 overflow-hidden">
        <Container>
          <Row className=" align-items-center flex-column-reverse  flex-lg-row justify-content-center justify-content-lg-start">
            <Col
              sm="7"
              md="5"
              lg="5"
              xl="4"
              className="position-relative text-center text-sm-start pt-5 pt-lg-0 pe-lg-5"
            >
              <img
                data-aos="fade-right"
                data-aos-duration="1100"
                className=" w-100 mobile_img"
                src={path_14}
                alt="path_14.png"
              />
              <div className="position-absolute slider_parent">
                <SliderDummy />
              </div>
            </Col>
            <Col lg="7">
              <p
                data-aos="fade-left"
                data-aos-duration="1100"
                className=" fs_xxl ff_gilroy_bold tc_danger pt-md-5 pt-lg-0 "
              >
                Our benefits
              </p>
              <h2
                data-aos="fade-left"
                data-aos-duration="1100"
                className=" fw-bold fs_4xl text-light py-2 ff_gilroy_bold "
              >
                Take control of <br></br> your cellular connectivity
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1100"
                className="  fs_xl tc_info py-2 ff_gilroy_Regular"
              >
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
              <div className=" d-sm-flex ">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className=" w_50 mt-3 "
                >
                  <h2 className=" fw-semibold ff_gilroy_bold text-light fs_xxl">
                    Get started with IoT
                  </h2>
                  <p className=" fw_medium  fs_sm tc_info max_width_300 ff_gilroy_Regular">
                    Our experts helps you find the most suitable carrier profile
                    for your deployment.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className=" w_50 mt-3 ps-lg-4 ps-xl-0"
                >
                  <h2 className=" fw-semibold ff_gilroy_bold text-light fs_xxl ">
                    Manage connectivity
                  </h2>
                  <p className=" fw_medium  fs_sm tc_info max_width_250 ff_gilroy_Regular">
                    Control all of your IoT SIM cards on a single platform.
                  </p>
                </div>
              </div>
              <div className=" d-sm-flex ">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className=" w_50 mt-3 "
                >
                  <h2 className=" fw-semibold ff_gilroy_bold text-light fs_xxl">
                    One global solution
                  </h2>
                  <p className=" fw_medium  fs_sm tc_info max_width_300 ff_gilroy_Regular">
                    You will receive 1 invoice and have a single point of
                    contact for support no matter where the SIMs are deployed.
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className=" w_50 mt-3 ps-lg-4 ps-xl-0"
                >
                  <h2 className=" fw-semibold ff_gilroy_bold text-light fs_xxl">
                    Scale infinitely with ease
                  </h2>
                  <p className=" fw_medium  fs_sm tc_info max_width_354 ff_gilroy_Regular">
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
