import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProtecturoNav from "./ProtecturoNav";
import Slider from "react-slick";
import mobile from "../assets/images/svg/hero-mobile.svg";
import mobileslider from "../assets/images/svg/phoneSlider.svg";
// import Slider from "slick-carousel";

const Header = () => {
  var setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
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
    fade: true,
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
              <div className="col-7 ">
                <h1 className="text-white ff_gilroy fw-bold fs_5xl">
                  A platform to secure your all digital assets.
                </h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="w-75 position-absolute  ">
                  <Slider {...setting}>
                    <div className="px-2 ">
                      <div className="hero-slider-card">
                        <p className="text-center pt-4 ff_inter text-white fw_bold fs_lg mb-2">
                          Esther Howard
                        </p>
                        <p className="text-center ff_inter fw_regular text-white opacity_06 pb-4">
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
              <div className="col-4">
                <div className="w-100 d-flex align-items-center justify-content-end position-relative z_index_10">
                  <img className="w-100 " src={mobile} alt="" />
                  <div className="position-absolute w-100 top-0 h-100  start-0">
                    <Slider {...phonesetting}>
                      <div className="h-100">
                        <img
                          className="w-75 negative-margin pt-5 ms-3"
                          src={mobileslider}
                          alt=""
                        />
                        <p className="text-center text-white pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-3">
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
                        <p className="text-center text-white pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-3">
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
                        <p className="text-center text-white pt-5">
                          Satisfaction
                        </p>
                        <p className="text-center text-white px-3">
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
