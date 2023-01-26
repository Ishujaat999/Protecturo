import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import eSIM_img from "../assets/images/png/eSIM_img.png";
import SIMCard from "../assets/images/png/SIMCard.png";
import TMobile from "../assets/images/png/TMobile.png";
const OurProducts = () => {
  return (
    <>
      <section className="my-5 py-5 overflow_x_hidden">
        <Container>
          <h3
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="ff_gilroy_bold fw-bold fs_xxl tc_danger text-center"
          >
            Our products
          </h3>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="ff_gilroy_bold fw-bold fs_4xl text-light InClass-mx-width
           text-center mx-auto mb-4"
          >
            Allow us to secure your data with Protecturo’s products
          </h2>
          <div className="our_max_width mx-auto">
            <Row className="mt-5 justify-content-center">
              <Col md="6" lg="4">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1100"
                  className="d-flex text-center justify-content-center h-100"
                >
                  <div className="Products_card mx-3">
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
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="d-flex text-center justify-content-center h-100"
                >
                  <div className="Products_card mx-3">
                    <img className="mb-1" src={SIMCard} alt="SIMCard" />
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
                <div
                  data-aos="fade-right"
                  data-aos-duration="1100"
                  className="d-flex text-center justify-content-center h-100"
                >
                  <div className="Products_card mx-3">
                    <img className="mb-1" src={TMobile} alt="TMobile" />
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurProducts;
