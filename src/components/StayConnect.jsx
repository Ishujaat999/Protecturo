import React from "react";
import { Container } from "react-bootstrap";
import StayVector from "../assets/images/svg/stay-vector.svg";
import StayVectorStart from "../assets/images/svg/stay-vector-start.svg";
const StayConnect = () => {
  return (
    <>
      <section className="my-xl-5 pb-5">
        <Container className="pb-5">
          <div className="bg_danger stay-sec rounded-4 p-3 p-md-5 position-relative overflow-hidden mb-5">
            <img
              className="position-absolute top-0 end-0 z_index_1"
              src={StayVector}
              alt="StayVector"
            />
            <h2
              className="ff_gilroy_bold fw-bold fs_4xl text-white text-center
             pt-3 z_index_2 position-relative"
            >
              Stay connect wherever you go
            </h2>
            <p
              className="ff_gilroy_Medium fw_medium fs_xl tc_secondary
             text-center Stay-mx-width mx-auto mt-3 pb-sm-4 z_index_2 position-relative"
            >
              Buy an international eSIM card, stay connected wherever you go,
              and avoid expensive phone bills.
            </p>
            <div className="text-center my-3 z_index_2 position-relative">
              <button
                className="ff_Montserrat fw_medium fs_sm
               bg-black border-0 text-white  rounded-pill my-button"
              >
                Get started
              </button>
            </div>
            <img
              className="position-absolute bottom-0 start-0 z_index_1"
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
