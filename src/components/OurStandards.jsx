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
          // markers: true,
        },
      })
      .from(".myDemoBox", {
        // clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
        duration: 2,
        // markers: true,
      });
  }, []);
  return (
    <>
      <section
        id="hearedListing"
        className=" bg-black mt_m_1 py-5 position-relative "
      >
        <div className="blur d-none d-md-block position-absolute start-0 top-50"></div>
        <Container>
          <p
            data-aos="fade-right"
            data-aos-duration="1100"
            className=" fs_xxl  fw-bold ff_gilroy_bold tc_danger"
          >
            Our standards
          </p>
          <h2
            data-aos="fade-right"
            data-aos-duration="1100"
            className=" fw-bold text-light ff_gilroy_bold fs_4xl pb-3 pb-md-2"
          >
            Privacy standards <br /> not seen before in telecom
          </h2>
          <Row className=" align-items-center">
            <Col md="10" lg="6" xl="6">
              <div className="myDemoBox">
                <img
                  data-aos="fade-rigth"
                  data-aos-duration="1100"
                  className=" w-100 position-rel ative Our_Standards_img"
                  src={Our_Standards}
                  alt="Our_Standards"
                />
              </div>
              <img
                className=" position-absolute dote_img d-none d-lg-inline-block"
                src={dote_get}
                alt="dote_get"
              />
            </Col>
            <Col lg="6" className="ps-lg-4 pt-lg-4">
              <h2
                data-aos="fade-left"
                data-aos-duration="1100"
                className=" fs_3xl fw-bold text-light ff_gilroy_bold pt-3 pt-lg-5 "
              >
                Get started <br /> with Protecturo
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1100"
                className=" fw_medium tc_info fs_md ff_gilroy_Regular"
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="1100"
                className=" fw_medium tc_info fs_md ff_gilroy_Regular"
              >
                Your personal information is 100% safe with us, because we do
                not require any personal information besides email. Of course no
                contracts, no credit checks and no fine prints. To protect your
                privacy online, our data plans come with a Privacy IP address.
              </p>
              <button
                className="ff_Montserrat fw_medium fs_sm
               bg_danger border-0 text-white  rounded-pill my-button"
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
