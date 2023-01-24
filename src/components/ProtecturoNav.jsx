import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";

import PageLogo from "../assets/images/png/page-logo.png";

const ProtecturoNav = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <Nav className="py-1 bg-black">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="d-inline-bloack">
              <img src={PageLogo} alt="PageLogo" />
            </a>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center">
              <li>
                <a
                  className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                  href="#Physique"
                >
                  Physique
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                  href="#Mind"
                >
                  Mind
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                  href="#Spirit"
                >
                  Spirit
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                  href="#Recovery"
                >
                  Recovery
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block fs_md fw_regular nav_links text-white ff_inter transition"
                  href="#Nutrition"
                >
                  Nutrition
                </a>
              </li>
            </ul>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                    href="#Physique"
                  >
                    Physique
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                    href="#Mind"
                  >
                    Mind
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                    href="#Spirit"
                  >
                    Spirit
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                    href="#Recovery"
                  >
                    Recovery
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md fw_regular nav_links text-white ff_inter"
                    href="#Nutrition"
                  >
                    Nutrition
                  </a>
                </li>
              </ul>
              <a
                onClick={() => setnav(false)}
                className="Nav_btn text-white fs_md fw_semibold ff_poppins"
                href="#"
              >
                Log In
              </a>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default ProtecturoNav;
