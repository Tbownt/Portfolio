/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {
  Navbar as NavbarBS,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //Se utiliza un efecto para cuando baje la pagina se aplique una animacion en el navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header>
      <NavbarBS expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid className="p-0 px-lg-3">
          <div className="nav-box"></div>
          <NavbarBS.Brand href="#about">Andres Salom</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBS.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about"
                    ? "active navbar-link about"
                    : "navbar-link about"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
              <NavDropdown
                title={"Language"}
                id="basic-nav-dropdown"
                className="nav-link navbar-link"
              >
                <NavDropdown.Item>Spanish</NavDropdown.Item>
                <NavDropdown.Item>English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>
    </header>
  );
};
