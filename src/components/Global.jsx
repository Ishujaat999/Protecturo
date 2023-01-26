import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GlobalImg from "../assets/images/png/Global.png";
const Global = () => {
  return (
    <>
      {/* <section className="global_bg pt-xxl-5">
        <div className="my_container py-xxl-5">
          <Row className="align-items-center position-relative py-xxl-4">
            <Col md="6" lg="8">
              <h2 className="ff_gilroy_bold fw-bold fs_4xl tc_secondary pe-5 pe-xxl-0">
                Global IoT connectivity to deploy and scale your solutions
              </h2>
              <p className="ff_gilroy_Medium fw_medium fs_xl tc_info mt-4 pb-2 pe-5">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
              <button
                className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white rounded-pill my-button mt-5"
              >
                Get started
              </button>
            </Col>
            <Col md="6" lg="4">
              <img
                className="position_xxl_absolute end_xxl_0 global_img w_max_xxl_100"
                src={GlobalImg}
                alt="GlobalImg"
              />
            </Col>
          </Row>
        </div>
      </section> */}
      <section className="connectivity_bg">
        <Container>
          <div className="position-relative">
            <Row
              className="justify-content-between align-items-center 
             flex-lg-row"
            >
              <Col md="6" lg="8">
                <div className="py-4">
                  <h2 className="ff_gilroy_bold fw-bold fs_4xl tc_secondary mt-4 mt-lg-0">
                    Global IoT connectivity to deploy and scale your solutions
                  </h2>
                  <p
                    className="ff_gilroy_Medium fw_medium fs_xl tc_info 
                  my-xl-5 mt-3 mt-lg-0 pe-xl-5 me-xl-5"
                  >
                    If you're serious about getting your IoT build off the
                    ground - Protecturo is ready to make it quick, frictionless
                    and smart. Get started today with a free SIM & data, or
                    explore enterprise options with our team of IoT experts.
                  </p>
                </div>
              </Col>
              <Col md="3" lg="4" className="text-center">
                <span className="GlobalImg">
                  <img className="w-100" src={GlobalImg} alt="GlobalImg" />
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Global;
