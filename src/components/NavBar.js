import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  const onUUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <NavbarToggle aria-contorls="basic-navbar-nav"></NavbarToggle>
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                href="#home"
                className={
                  activeLink === "home" ? "active navcbar-link" : "navbar-link "
                }
                onClick={() => onUUpdateActiveLink("home")}
              >
                Home
              </NavLink>
              <NavLink
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navcbar-link"
                    : "navbar-link "
                }
                onClick={() => onUUpdateActiveLink("projects")}
              >
                Projects
              </NavLink>
              <NavLink
                href="#contactme"
                className={
                  activeLink === "contactme"
                    ? "active navcbar-link"
                    : "navbar-link "
                }
                onClick={() => onUUpdateActiveLink("contactme")}
              >
                Contact me
              </NavLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />{" "}
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />{" "}
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />{" "}
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect!</span>
              </button>
            </span>
          </NavbarCollapse>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
