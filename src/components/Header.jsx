import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProtecturoNav from "./ProtecturoNav";
import Slider from "react-slick";
import mobile from "../assets/images/svg/hero-mobile.svg";
import mobileslider from "../assets/images/svg/phoneSlider.svg";
import east from "../assets/images/svg/east.svg";
import west from "../assets/images/svg/west.svg";
import arrow from "../assets/images/svg/aroow-slider.svg";

// import Slider from "slick-carousel";

const Header = () => {
  var setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    prevArrow: '<img className="prevArrow" src={west} alt="" />',
    nextArrow: '<img className="nextArrow" src={east} alt="" />',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  var phonesetting = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="d-flex min-vh-100 flex-column bg-black">
        <ProtecturoNav />
        <div className="flex-grow-1 py-4 d-flex align-items-center position-relative">
          <Container>
            <Row className="justify-content-between position-relative">
              <div className="col-lg-7 col-12">
                <h1 className="tc_secondary ff_gilroy fw-bold fs_5xl">
                  A platform to secure your all digital assets.
                </h1>
                <p className="ff_gilroy tc_info">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="w-75 position-absolute d-none d-lg-block  ">
                  <div className="pt-4 pb-3">
                    <img className="prevArrow" src={west} alt="" />
                    <img className="ms-3 nextArrow" src={east} alt="" />
                  </div>
                  <Slider {...setting}>
                    <div className="px-2 h-100 ">
                      <div className="hero-slider-card">
                        <p className=" py-4 ff_gilroy text-white  fs_lg   ps-3 tc_primary pe-5">
                          Secure payments
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" px-2 h-100">
                      <div className="hero-slider-card">
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          Operational securities
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          <span className="text-nowrap">Secure data</span>{" "}
                          networks
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          Encrypted transactions
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="px-2  ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          <span className="text-nowrap">Secure data</span>{" "}
                          networks
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          Operational securities
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className=" py-4 ff_gilroy text-white  fs_lg ps-3 tc_primary pe-5">
                          Operational securities
                        </p>
                        <div className="d-flex justify-content-end w-100 pe-3 pb-4">
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="  d-block d-lg-none ">
                  <Slider {...setting}>
                    <div className="px-2 ">
                      <div className="hero-slider-card">
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center  text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className=" px-2">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_2} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className="px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className="px-2  ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                    <div className=" px-2 ">
                      <div className="hero-slider-card">
                        {/* <img className="w-100" src={esther_3} alt="esther_1" /> */}
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-lg-4 col-10 mx-auto ">
                <div className="w-100 d-flex  align-items-center justify-content-end position-relative z_index_10">
                  <img className="w-100 " src={mobile} alt="" />
                  <div className="position-absolute w-100 top-0 h-100  start-0">
                    <Slider {...phonesetting}>
                      <div className="h-100">
                        <img
                          className="w-75 negative-margin pt-5 ms-3"
                          src={mobileslider}
                          alt=""
                        />
                        <p className="text-center text-linear-red ff_gilroy pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-5 ff_gilroy">
                          98% of our valued customers are secured from cyber
                          frauds.
                        </p>
                      </div>
                      <div className="w-100">
                        <div className="text-center mx-auto d-flex justify-content-center w-100">
                          <img
                            className="w-75 pt-5 ms-3 text-center mx-auto"
                            src={mobileslider}
                            alt=""
                          />
                        </div>
                        <p className="text-center text-linear-red ff_gilroy pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-5 ff_gilroy">
                          98% of our valued customers are secured from cyber
                          frauds.
                        </p>
                      </div>
                      <div className="">
                        <img
                          className="w-75 pt-5 ms-3"
                          src={mobileslider}
                          alt=""
                        />
                        <p className="text-center text-linear-red ff_gilroy pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-5 ff_gilroy">
                          98% of our valued customers are secured from cyber
                          frauds.
                        </p>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
