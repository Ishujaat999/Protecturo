import React from "react";
import Slider from "react-slick";
import { sliderData } from "./Helper";
// import path_4 from "../assets/images/png/path14.png";
const SliderDummy = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" container pb-5">
        <h2 className=" fw-semibold fs_sm text-center">
          Single platform to <br /> secure your all digital assets.
        </h2>
        <Slider {...settings}>
          {sliderData.map((obj, index) => (
            <div>
              <h2 className=" fw-bold fs_4xl tc_danger fs_sm_25">{obj.heading}</h2>
              <p className="">{obj.para}</p>
            </div>
          ))}
          <div className=""></div>
        </Slider>
      </div>
    </>
  );
};

export default SliderDummy;
