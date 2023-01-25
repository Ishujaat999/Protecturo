import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import eSIM_img from "../assets/images/png/eSIM_img.png";
const OurProducts = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col md="6" lg="4">
              <div className="d-flex text-center justify-content-center">
                <div className="Products_card ">
                  <img className="mb-1" src={eSIM_img} alt="eSIM_img" />
                  <h3 className="ff_gilroy_SemiBold fw-semibold fs_xxl tc_primary mt-4">
                    eSIM
                  </h3>
                  <p className="ff_gilroy_Medium fw_medium fs_sm tc_info mb-4 mt-3">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <button
                    className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white rounded-pill my-button"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4" className="mt-4 mt-md-0">
              <div className="d-flex text-center justify-content-center">
                <div className="Products_card ">
                  <img className="mb-1" src={eSIM_img} alt="eSIM_img" />
                  <h3 className="ff_gilroy_SemiBold fw-semibold fs_xxl tc_primary mt-4">
                    SIM card
                  </h3>
                  <p className="ff_gilroy_Medium fw_medium fs_sm tc_info mb-4 mt-3">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <button
                    className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white rounded-pill my-button"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4" className="mt-4 mt-lg-0">
              <div className="d-flex text-center justify-content-center">
                <div className="Products_card ">
                  <img className="mb-1" src={eSIM_img} alt="eSIM_img" />
                  <h3 className="ff_gilroy_SemiBold fw-semibold fs_xxl tc_primary mt-4">
                    Mobile Wifi Hotspot
                  </h3>
                  <p className="ff_gilroy_Medium fw_medium fs_sm tc_info mb-4 mt-3">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <button
                    className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white rounded-pill my-button"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurProducts;
