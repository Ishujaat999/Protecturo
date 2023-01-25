import React from "react";
import Accordion from "react-bootstrap/Accordion";
// import pngegg from "../assets/img/png/pngegg.png";

function Faq() {
  return (
    <>
      <section className=" bg-black position-relative" id="Faq">
        <div className=" container py-5">
          <div className="row flex-column-reverse align-items-center flex-xl-row justify-content-md-between">
            <div className=" col-12  col-md-10 col-xl-6 my-5">
              <p className=" ff_bold_gilroy fw-bold fs_md bg_red_grad_1 p-0 m-0 text-center text-xl-start">
                FAQs
              </p>
              <h2 className=" ff_bold_gilroy fw-bold fs_xl_2 text_white_2 p-0 m-0 pt-1 text-center text-xl-start">
                Some useful answers
              </h2>
              <Accordion
                className=" d-flex flex-column gap-4 mt-5"
                defaultActiveKey="0"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the three types of cyber threats?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can you protect yourself from cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What would happen without cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is cyber security a social or governance issue?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className=" col-12 col-sm-8 col-md-6  col-xl-5">
              {/* <img
                className=" w_100 position-absolute pos_pngegg  bottom-0"
                src={pngegg}
                alt="pngegg"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
