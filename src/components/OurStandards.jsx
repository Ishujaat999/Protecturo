import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Our_Standards from "../assets/images/png/OurStandards.png";
import dote_get from "../assets/images/png/doteGetSarted.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const OurStandards = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hearedListing",
          start: "top 40%",
          // markers: false,
        },
      })
      .from(".myDemoBox", {
        clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
        duration: 0.5,
        // markers: false,
      });
  }, []);
  return (
    <>
      <section id="hearedListing" className=" bg-black mt_m_1 py-5">
        <Container>
          <p className=" fs_xxl  fw-bold tc_danger">Our standards</p>
          <h2 className=" fw-bold text-light fs_4xl pb-3 pb-md-5">
            Privacy standards <br /> not seen before in telecom
          </h2>
          <Row className=" align-items-center">
            <Col md="10" lg="6" xl="5">
              <div className="myDemoBox">
                <img
                  className=" w-100 position-relative z_index_m_1 Our_Standards_img"
                  src={Our_Standards}
                  alt="Our_Standards"
                />
              </div>
              {/* <img
                className=" position-absolute dote_img"
                src={dote_get}
                alt="dote_get"
              /> */}
            </Col>
            <Col lg="6" className="">
              <h2 className=" fs_3xl fw-bold text-light pt-5 ">
                Get started <br /> with Protecturo
              </h2>
              <p className=" fw_medium tc_info fs_md ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p className=" fw_medium tc_info fs_md ">
                Your personal information is 100% safe with us, because we do
                not require any personal information besides email. Of course no
                contracts, no credit checks and no fine prints. To protect your
                privacy online, our data plans come with a Privacy IP address.
              </p>
              <button
                className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white  rounded-pill my-button mt-3"
              >
                Get started
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurStandards;
