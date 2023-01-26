import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import page_logo from "../assets/images/svg/page-logo.svg";
import facebook from "../assets/images/svg/facebook.svg";
import telegram from "../assets/images/svg/telegram.svg";
import twiter from "../assets/images/svg/twiter.svg";
import insta from "../assets/images/svg/insta.svg";

function Footer() {
  return (
    <>
      <footer className=" mt-5 pt-5 pb-4 overflow_x_hidden">
        <Container className="pt-3">
          <Row>
            <Col lg="4">
              <a href="#">
                <img src={page_logo} alt="page_logo" />
              </a>
              <p className=" ff_gilroy_Medium fw_medium fs_sm tc_info max_width_388 mt-4 pb-lg-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis commodo consequat.
              </p>
              <div className="d-none d-md-inline-block mb-4 mb-md-0">
                <div className="d-flex gap-3 mt-4 mb-lg-5">
                  <a className=" social_icons d-inline-block" href="">
                    <img src={telegram} alt="telegram " />
                  </a>
                  <a className=" social_icons d-inline-block" href="">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a className=" social_icons d-inline-block" href="">
                    <img src={insta} alt="insta" />
                  </a>
                  <a className=" social_icons d-inline-block" href="">
                    <img src={twiter} alt="twiter" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="8">
              <div className=" row justify-content-between">
                <div className="col-6 col-sm-3 mt-sm-0 pt-lg-0">
                  <div className="d-flex flex-column align-items-center align-items-lg-end">
                    <ul className="ps-0">
                      <li className="ff_gilroy_bold fw-bold fs_lg text-white mb-4">
                        Products
                      </li>
                      <li className=" mb-3">
                        <a
                          className="ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          eSIM
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          SIM Card
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Wifi HotSopt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 mt-sm-0 pt-lg-0">
                  <div className="d-flex flex-column align-items-center align-items-lg-end">
                    <ul className=" ps-0">
                      <li className=" d-inline-block ff_gilroy_bold fw-bold fs_lg text-white mb-4">
                        Company
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Careers
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Ventures
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Grants
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Docs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 mt-sm-0 pt-lg-0">
                  <div className="d-flex flex-column align-items-center align-items-lg-end">
                    <ul className=" ps-0">
                      <li className=" d-inline-block ff_gilroy_bold fw-bold fs_lg text-white mb-4">
                        Resources
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Support Center
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          FAQs
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Partners
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Blogs
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Updates & News
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3 mt-sm-0 pt-lg-0">
                  <div className="d-flex flex-column align-items-center align-items-lg-end">
                    <ul className=" ps-0">
                      <li className=" ff_gilroy_bold fw-bold fs_lg text-white mb-4">
                        My Account
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Profile
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Favorites
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Watchlist
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          My Collections
                        </a>
                      </li>
                      <li className=" mb-3">
                        <a
                          className=" ff_gilroy_SemiBold nav_links fw-semibold fs_sm tc_info "
                          href="#"
                        >
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-md-none d-block">
            <div className="d-flex justify-content-center gap-3 mt-4 mb-lg-5">
              <a className=" tranform_scale d-inline-block" href="">
                <img src={telegram} alt="telegram " />
              </a>
              <a className=" tranform_scale d-inline-block" href="">
                <img src={facebook} alt="facebook" />
              </a>
              <a className=" tranform_scale d-inline-block" href="">
                <img src={insta} alt="insta" />
              </a>
              <a className=" tranform_scale d-inline-block" href="">
                <img src={twiter} alt="twiter" />
              </a>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <p className=" text-center tc_info pt-4 ff_gilroy_Medium fw_medium fs_sm ">
              © 2022 Protecturo, All rights reserved.
            </p>
            <p className=" text-center tc_info pt-sm-4 ff_gilroy_Medium fw_medium fs_sm ">
              Privacy Policy • Terms & Conditions
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
