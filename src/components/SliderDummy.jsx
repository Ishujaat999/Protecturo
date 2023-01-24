import React from "react";
import Slider from "react-slick";
import path_4 from "../assets/images/png/path14.png";
const SliderDummy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" container">
        <img src={path_4} alt="path_4" className=" position-relative" />

        <Slider {...settings}>
          <div>
            <div className="">
              <h2 className=" fw-semibold fs_sm text-center">
                Single platform to <br /> secure your all digital assets.
              </h2>

              <div className=" d-flex">
                <div className="">
                  <h2>50K</h2>
                  <p>Valued customers</p>
                </div>
                <div className="">
                  <h2>50K</h2>
                  <p>Valued customers</p>
                </div>
                <div className="">
                  <h2>50K</h2>
                  <p>Valued customers</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div></div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderDummy;
