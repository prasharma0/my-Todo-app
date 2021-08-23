import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Layout = (props: any) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            React-Todo-App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}

      <Navbar fixed="bottom" bg="light" expand="lg">
        <Container>
          <div className="footer-brand">
            <Navbar.Brand href="https://github.com/ameetshrma1">
              {" "}
              Created by Amit Sharma
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Layout;
