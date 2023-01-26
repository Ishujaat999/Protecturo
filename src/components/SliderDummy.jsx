import React from "react";
import Slider from "react-slick";
import { sliderData } from "./Helper";
// import path_4 from "../assets/images/png/path14.png";
const SliderDummy = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" container pb-5 ">
        <h2 className=" fw-bold fs_sm text-center text-light pb-3">
          Single platform to <br /> secure your all digital assets.
        </h2>
        <Slider {...settings}>
          {sliderData.map((obj, index) => (
            <div>
              <h2 className=" fw-bold fs_xxl_30 tc_danger fs_sm_25">
                {obj.heading}
              </h2>
              <p className="tc_info">{obj.para}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderDummy;
