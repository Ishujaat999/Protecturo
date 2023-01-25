import React from "react";
import { Col, Row } from "react-bootstrap";
import GlobalImg from "../assets/images/png/Global.png";
const Global = () => {
  return (
    <>
      <section className="global_bg pt-xxl-5 mb-5">
        <div className="my_container py-xxl-5">
          <Row className="align-items-center position-relative py-xxl-4 mb-5">
            <Col md="6" lg="8">
              <h2 className="ff_gilroy fw-bold fs_4xl tc_secondary pe-5 pe-xxl-0">
                Global IoT connectivity to deploy and scale your solutions
              </h2>
              <p className="ff_gilroy fw_medium fs_xl tc_info mt-4 pb-2 pe-5">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
              <button
                className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white  rounded-pill my-button mt-5"
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
      </section>
    </>
  );
};

export default Global;
