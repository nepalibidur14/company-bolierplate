import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { Link } from "react-scroll";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const Heading = (props) => {
  const [change, setChange] = useState(false);
  const changePosition = 200;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: "400ms ease",
    height: "auto",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="lg" style={style}>
        <Container>
          <NavbarBrand href="/">
            <img src="./myCompany.jpeg" alt="navbar imgs" height="60" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="ml-auto " navbar>
              <NavItem className="nav-item">
                <NavLink href="#main" className="text-dark text-weight-bolder ">
                  {" "}
                  <Link
                    className="navs"
                    activeClass="active"
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <strong> Home </strong>
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem className="nav-item">
                <NavLink
                  href="#products"
                  className="text-dark text-weight-bolder"
                >
                  {" "}
                  <Link
                    className="navs"
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <strong> Products</strong>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink href="#about" className="text-dark text-weight-bolder">
                  {" "}
                  <Link
                    className="navs"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <strong> About Us</strong>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  href="#contact"
                  className="text-dark text-weight-bolder"
                >
                  {" "}
                  <Link
                    className="navs"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={2000}
                  >
                    <strong> Contact </strong>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
