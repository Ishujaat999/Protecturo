import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureData from "../FeatureData";
const Features = () => {
  return (
    <>
      <section className="pb-5">
        <Container className="pb-5">
          <h3 className="ff_gilroy_bold fw-bold fs_xxl tc_danger">Features</h3>
          <h2 className="ff_gilroy_bold fw-bold fs_4xl text-light InClass-mx-width">
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
                  <div className="Features_card py-3 px-4 h-100">
                    <img src={value.Img} alt="yourData" />
                    <div className=" p-3">
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
