import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import google_play from "../assets/images/png/google_play.png";
import app_store from "../assets/images/png/app_store.png";
import instant_img from "../assets/images/png/instant_img.png";

function Connectivity() {
  return (
    <>
      <section>
        <Container>
          <div className="connectivity_bg p-3 p-sm-5 position-relative">
            <Row
              className="justify-content-between align-items-center 
            flex-column-reverse flex-lg-row"
            >
              <Col lg="6">
                <h2 className="ff_gilroy_bold fw-bold fs_4xl tc_secondary mt-4 mt-lg-0">
                  Instant connectivity with the Protecturo app
                </h2>
                <p className="ff_gilroy_Medium fw_medium fs_xl tc_info my-5">
                  The ideal for the 21st century roadwarrior. The Protecturo app
                  lets you to grab a single data plan where and when you want -
                  at home or in any of our 190+ destinations. Select a plan from
                  the app, download an
                  <span className=" fw-bold tc_warning">eSIM</span>, and you'll
                  connect on the spot, on physical SIM card required.
                </p>
                <img
                  className="me-3 mb-xl-0"
                  src={google_play}
                  alt="google_play"
                />
                <img className="" src={app_store} alt="app_store" />
              </Col>
              <Col lg="6" xl="5">
                <img
                  className="instant_img"
                  src={instant_img}
                  alt="instant_img"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Connectivity;
