import React, { useEffect } from "react";
import benifit from "../assets/images/png/benefit-img.png";
import benifit1 from "../assets/images/svg/benifit1.svg";
import benifit2 from "../assets/images/svg/benifit2.svg";
import benifit3 from "../assets/images/svg/benifit3.svg";
import benifit4 from "../assets/images/svg/benifit4.svg";
import OurProductDote from "../assets/images/png/ourProductDote.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import OurProducts from "./OurProducts";

const OurBenifit = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#Benefits",
          start: "top 40%",
          // markers: false,
        },
      })
      .from("#myBox", {
        // clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
        duration: 0.5,
        // markers: false,
      });
  }, []);
  return (
    <section className=" py-4 py-md-5 position-relative" id="Benefits">
      <div className="blur d-none d-lg-block position-absolute benifit_blur"></div>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1100"
              className="text-center text-md-start"
            >
              <p className="ff_gilroy_bold fs_xxl tc_danger mt-5 mt-lg-0  mb-0">
                Our product benefits
              </p>
              <h2 className="ff_gilroy_bold fs_4xl tc_secondary   mt-2  ">
                <span className="d-lg-block">What you will </span>get with
                Protecturo
              </h2>
              <p className=" fs_xl ff_gilroy_Regular tc_info  mb-0 fs_sm mt-3">
                Your creativity is endless. Your IoT project shouldn't be held
                back cellular connectivity. Let's build a new unicorn together.
              </p>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-12 col-sm-6 mb-5">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="text-center text-md-start"
                >
                  <img src={benifit1} alt="connected" />
                  <h2 className="ff_gilroy_SemiBold fs_xxl tc_secondary mt-3">
                    Stay connected
                  </h2>
                  <p className="ff_gilroy_Regular fs_sm tc_info mb-0 mt-2 ">
                    Travel and stay connected without roaming or surprise bills.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-5">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="text-center text-md-start"
                >
                  <img src={benifit2} alt="connected" />
                  <h2 className="ff_gilroy_SemiBold fs_xxl tc_secondary mt-3">
                    International
                  </h2>
                  <p className="ff_gilroy_Regular fs_sm tc_info mb-0 mt-2 ">
                    Keep your local all SIM card to receive all calls
                    everywhere.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-sm-5 ">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="text-center text-md-start"
                >
                  <img src={benifit3} alt="connected" />
                  <h2 className="ff_gilroy_SemiBold fs_xxl tc_secondary mt-3">
                    Ease to get
                  </h2>
                  <p className="ff_gilroy_Regular fs_sm tc_info mb-0 mt-2 ">
                    Purchase and install to your eSIM in just one minute.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-5">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                  className="text-center text-md-start"
                >
                  <img src={benifit4} alt="connected" />
                  <h2 className="ff_gilroy_SemiBold fs_xxl tc_secondary mt-3">
                    Data plans
                  </h2>
                  <p className="ff_gilroy_Regular fs_sm tc_info mb-0 mt-2 ">
                    Gets unlimited data plans in according to destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="myBox"
              id="myBox"
            >
              <img className="w-100" src={benifit} alt="mask " />
            </div>
            <img
              className=" position-absolute our_benifit_dot d-none d-lg-inline-block"
              src={OurProductDote}
              alt="OurProductDote"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenifit;
