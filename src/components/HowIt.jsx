import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import scanner from "../assets/images/png/ScanTheQr.png";
import setting from "../assets/images/svg/Check.svg";
import cart from "../assets/images/svg/Buy.svg";
import qr from "../assets/images/svg/qr_code.svg";
import line from "../assets/images/svg/Line.svg";
import line2 from "../assets/images/svg/Line_2.svg";
function HowIt() {
  return (
    <>
      <section className="pb-5 position-relative" id="App">
        <Container>
          <Row className=" align-items-center justify-content-center justify-content-lg-start">
            <Col sm="8" md="4">
              <div data-aos="fade-up-right" className=" text-center">
                <img
                  className=" w-100 scanner_img"
                  src={scanner}
                  alt="scanner"
                />
              </div>
            </Col>
            <Col md="7" className="pt-4 pt-md-0">
              <div data-aos="fade-up-left">
                <p className=" ff_gilroy_Medium fw-bold fs_xl tx_neutral tc_danger text-center text-md-start">
                  How it works
                </p>
                <p className=" ff_gilroy_Medium fw-bold fs_4xl tx_secondary text-light text-center text-md-start">
                  Learn how does international eSIM work
                </p>
                <Row className=" justify-content-between pt-4">
                  <Col className=" pt-lg-5 position-relative">
                    <img src={setting} alt="" />
                    <img
                      className=" position-absolute line_position max_width_80 d-none d-lg-block"
                      src={line}
                      alt=""
                    />
                    <p className=" ff_gilroy_SemiBold fs_xl tx_secondary pt-2 text-light">
                      Check
                    </p>
                    <p className=" ff_gilroy_Medium fs_xsm tc_info max_width_170">
                      that your smartphone supports eSIM
                    </p>
                  </Col>
                  <Col>
                    <img src={cart} alt="" />
                    <p className=" ff_gilroy_SemiBold fs_xl tx_secondary pt-2 text-light">
                      Buy
                    </p>
                    <p className=" ff_gilroy_Medium fs_xsm tc_info max_width_170">
                      Your eSIM card to travel
                    </p>
                  </Col>
                  <Col
                    sm="4"
                    className=" pt-4 pt-sm-0 pt-lg-5 position-relative"
                  >
                    <img src={qr} alt="" />
                    <img
                      className=" position-absolute line2_position max_width_70 d-none d-lg-block"
                      src={line2}
                      alt=""
                    />
                    <p className=" ff_gilroy_SemiBold fs_xl tx_secondary pt-2 text-light">
                      Install the QR
                    </p>
                    <p className=" ff_gilroy_Medium fs_xsm  tc_info max_width_195">
                      and configure it. Activate it just before your leave
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HowIt;
