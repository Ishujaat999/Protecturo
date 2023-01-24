import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProtecturoNav from "./ProtecturoNav";

const Header = () => {
  return (
    <>
      <section className="d-flex min-vh-100 flex-column bg-black">
        <ProtecturoNav />
        <div className="flex-grow-1 py-4 d-flex align-items-center">
          <Container>
            <Row>
              <div className="col-6">
                <h1 className="text-white">
                  A platform to secure your all digital assets.
                </h1>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
