import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProtecturoNav from "./ProtecturoNav";
import Slider from "react-slick";
import mobile from "../assets/images/svg/hero-mobile.svg";
// import Slider from "slick-carousel";

const Header = () => {
  var settings = {
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
  return (
    <>
      <section className="d-flex min-vh-100 flex-column bg-black">
        <ProtecturoNav />
        <div className="flex-grow-1 py-4 d-flex align-items-center position-relative">
          <Container>
            <Row className="justify-content-between">
              <div className="col-6">
                <h1 className="text-white">
                  A platform to secure your all digital assets.
                </h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="col-4">
                <div className="w-100 d-flex align-items-center justify-content-end position-relative z_index_10">
                  <img className="w-100 " src={mobile} alt="" />
                  <p className="position-absolute top-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo nobis esse nam soluta dolores aliquam natus
                    officiis quas omnis minima, corrupti dicta amet nulla
                    placeat optio ducimus pariatur iste vel.
                  </p>
                </div>
              </div>
            </Row>

            <div className="w-75 position-absolute top-50">
              <Slider {...settings}>
                <div className="px-2 ">
                  <div className="hero-slider-card">
                    {/* <img className="w-100" src={esther_1} alt="esther_1" /> */}
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
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
