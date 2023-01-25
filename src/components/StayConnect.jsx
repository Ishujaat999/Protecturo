import React from "react";
import { Container } from "react-bootstrap";
import StayVector from "../assets/images/svg/stay-vector.svg";
import StayVectorStart from "../assets/images/svg/stay-vector-start.svg";
const StayConnect = () => {
  return (
    <>
      <section className="mt-5">
        <Container>
          <div className="bg_danger stay-sec rounded-4 p-5 position-relative">
            <img
              className="position-absolute top-0 end-0"
              src={StayVector}
              alt="StayVector"
            />
            <h2 className="ff_glory fw-semibold fs_4xl text-white text-center pt-3">
              Stay connect wherever you go
            </h2>
            <p className="ff_glory fw_medium fs_xl tc_secondary text-center Stay-mx-width mx-auto mt-3 mb-5">
              Buy an international eSIM card, stay connected wherever you go,
              and avoid expensive phone bills.
            </p>
            <div className="text-center mb-3">
              <button className="ff_Montserrat fw_medium fs_sm bg-black border-0 text-white  rounded-pill my-button">
                Get started
              </button>
            </div>
            <img
              className="position-absolute bottom-0 start-0"
              src={StayVectorStart}
              alt="StayVectorStart"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default StayConnect;
