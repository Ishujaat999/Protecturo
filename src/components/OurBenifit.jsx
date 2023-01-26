import React from "react";
// import mask from "../assets/img/png/mask.png";
// import connected from "../assets/img/png/connected.png";
// import calling from "../assets/img/png/calling.png";
// import ease from "../assets/img/png/ease.png";
// import data from "../assets/img/png/data.png";
const OurBenifit = () => {
  return (
    <section className="bg-black py-4 py-md-5" id="Benefits">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-xl-row">
          <div className="col-xl-6">
            <div className="text-center text-xl-start">
              <p className="ff_bold_gilroy fs_md bg_red_grad_1  mb-0">
                Our product benefits
              </p>
              <h2 className="ff_bold_gilroy fs_xl  text_white_1 mt-2  ">
                <span className="d-lg-block">What you will </span>get with
                Protecturo
              </h2>
              <p className=" ff_bold_gilroy text_gray_2 mb-0 fs_sm mt-3">
                Your creativity is endless. Your IoT project shouldn't be held
                back cellular connectivity. Let's build a new unicorn together.
              </p>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-12 col-sm-6 mb-5">
                <div className="text-center text-xl-start">
                  {/* <img src={connected} alt="connected" /> */}
                  <h2 className="ff_semiBold_gilroy fs_md text_white_2 mt-4">
                    Stay connected
                  </h2>
                  <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 ">
                    Travel and stay connected without roaming or surprise bills.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-5">
                <div className="text-center text-xl-start">
                  {/* <img src={calling} alt="connected" /> */}
                  <h2 className="ff_semiBold_gilroy fs_md text_white_2 mt-4">
                    International
                  </h2>
                  <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 ">
                    Keep your local all SIM card to receive all calls
                    everywhere.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-sm-5 ">
                <div className="text-center text-xl-start">
                  {/* <img src={ease} alt="connected" /> */}
                  <h2 className="ff_semiBold_gilroy fs_md text_white_2 mt-4">
                    Ease to get
                  </h2>
                  <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 ">
                    Purchase and install to your eSIM in just one minute.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-5">
                <div className="text-center text-xl-start">
                  {/* <img src={data} alt="connected" /> */}
                  <h2 className="ff_semiBold_gilroy fs_md text_white_2 mt-4">
                    Data plans
                  </h2>
                  <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 ">
                    Gets unlimited data plans in according to destinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            {/* <img className="w-100" src={mask} alt="mask " /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenifit;
