import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureData from "../FeatureData";
import cyber from "../assets/images/png/cyber.png";
const Features = () => {
  return (
    <>
      <section className="pb-5 position-relative">
        <img
          className="position-absolute d-none d-lg-inline-block end-0 cyber_img"
          src={cyber}
          alt="cyber"
        />
        <div className="blur d-none d-md-block position-absolute end-0 top-25"></div>
        <Container className="pb-5">
          <h3
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="ff_gilroy_bold fw-bold fs_xxl tc_danger"
          >
            Features
          </h3>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="ff_gilroy_bold fw-bold fs_4xl text-light InClass-mx-width"
          >
            Best-in-class Cyber safety for commercial and personal.
          </h2>

          <Row className=" justify-content-xl-between justify-content-center mb-5">
            {FeatureData.map((value) => {
              return (
                <Col
                  sm="6"
                  md="5"
                  lg="4"
                  xl="3"
                  key={value.id}
                  className="mt-4"
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1100"
                    className="Features_card p-3 px-4 h-100 card_hover"
                  >
                    <img src={value.Img} alt="yourData" />
                    <div className="py-3">
                      <div className="d-flex justify-content-between">
                        <h1 className="ff_gilroy_SemiBold fs_xxl fw-semibold tc_primary">
                          {value.heading}
                        </h1>
                      </div>
                      <p className="ff_gilroy_Medium fw_medium fs_sm tc_info">
                        {value.title}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
